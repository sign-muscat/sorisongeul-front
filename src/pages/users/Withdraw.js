import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteForm = ({ loggedInUser }) => { 
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      setEmail(loggedInUser.email); 
      setUserId(loggedInUser.id); 
    }
  }, [loggedInUser]);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    setIsModalOpen(false);
  
    try {
      const response = await axios.delete(`/api/v1/users/delete`, {
        data: { email, userId, password }, 
      });
    
      if (response.status === 200) {
        toast({
          title: "회원 탈퇴 완료",
          description: "회원 탈퇴가 완료되었습니다.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate('/users/success'); 
      } else if (response.status === 404) {
        toast({
          title: "오류",
          description: "회원이 존재하지 않습니다.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "오류",
          description: "회원 탈퇴에 실패했습니다.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "오류",
        description: "회원 탈퇴 중 오류가 발생했습니다.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          회원 탈퇴
        </Text>
        <FormControl isReadOnly>
          <FormLabel>이메일</FormLabel>
          <Input
            type="email"
            value={email} 
            readOnly
          />
        </FormControl>
        <FormControl isReadOnly>
          <FormLabel>아이디</FormLabel>
          <Input
            type="text"
            value={userId} 
            readOnly
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>비밀번호</FormLabel>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="red"
          onClick={handleDeleteClick}
          size="lg"
          variant="solid"
          isLoading={loading}
        >
          회원 탈퇴
        </Button>
      </VStack>

      {/* 모달 창 */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>회원 탈퇴 확인</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>정말로 회원 탈퇴를 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleConfirmDelete} isLoading={loading}>
              예
            </Button>
            <Button variant="outline" onClick={handleCloseModal} ml={3}>
              아니요
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DeleteForm;
