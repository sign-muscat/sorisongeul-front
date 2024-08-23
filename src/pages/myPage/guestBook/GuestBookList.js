import { Button } from "@chakra-ui/react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateGuestBook from './CreateGuestBook';

// 포스트잇 스타일 정의
const PostIt = styled.div`
  background: #ffeb3b; /* 포스트잇 색상 */
  border: 1px solid #fbc02d; /* 포스트잇 테두리 색상 */
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  width: 200px;
  position: relative;
  font-family: 'Arial', sans-serif;
`;

// 포스트잇 핀 스타일 정의
const Pin = styled.div`
  width: 20px;
  height: 20px;
  background: #c6c6c6;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

// 방명록 리스트 스타일 정의
const PostItList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding-bottom: 60px;
`;

// 버튼 스타일 정의
const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PostItItem = ({ message }) => (
  <PostIt>
    <Pin />
    {message}
  </PostIt>
);

const GuestBookList = ({ showAddButton = true }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/page/guestBook/list', {
          params: { limit: 1000 }
        });
        setMessages(response.data);
      } catch (err) {
        console.error('방명록을 가져오는 데 실패했습니다:', err);
        setError('방명록을 가져오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true); // 모달 열기
  const handleCloseModal = () => setIsModalOpen(false); // 모달 닫기

  const handleModalSubmit = async () => {
    // 모달 제출 후 메시지 리스트를 새로 고침
    try {
      const response = await axios.get('http://localhost:8080/api/v1/page/guestBook/list', {
        params: { limit: 1000 }
      });
      setMessages(response.data);
    } catch (err) {
      console.error('방명록을 가져오는 데 실패했습니다:', err);
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PostItList>
        {messages.length > 0 ? (
          messages.map((msg) => (
            <PostItItem key={msg.guestbookId} message={msg.content} />
          ))
        ) : (
          <div>
            <p>방명록이 없습니다.</p>
          </div>
        )}
      </PostItList>
      {showAddButton && (
        <AddButtonContainer>
          <Button colorScheme="teal" onClick={handleOpenModal}>
            새 방명록 추가
          </Button>
        </AddButtonContainer>
      )}
      <CreateGuestBook
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        senderId={1} // 실제 senderId로 교체
        receiverId={2} // 실제 receiverId로 교체
        onSubmit={handleModalSubmit} // 제출 후 메시지 새로 고침 함수
      />
    </div>
  );
};

export default GuestBookList;