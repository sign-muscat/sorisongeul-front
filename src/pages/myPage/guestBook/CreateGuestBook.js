import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// 모달 배경 스타일 정의
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 콘텐츠 스타일 정의
const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

// 닫기 버튼 스타일 정의
const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

// 제출 버튼 스타일 정의
const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const CreateGuestBook = ({ isOpen, onClose, senderId, receiverId, onSubmit }) => {
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8080/api/v1/page/guestBook', {
          senderId, 
          receiverId, 
          content,
          createdAt: new Date().toISOString(), 
          status: 'ACTIVATE' 
        });
        setContent('');
        onSubmit(); // 성공적으로 제출된 후 onSubmit 콜백 호출
        onClose(); 
      } catch (err) {
        console.error('방명록 작성에 실패했습니다:', err);
        setError('방명록 작성에 실패했습니다.');
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <ModalBackground>
        <ModalContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>방명록 작성</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>메시지</Label>
              <Textarea
                rows="4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </FormGroup>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <SubmitButton type="submit">작성</SubmitButton>
          </form>
        </ModalContent>
      </ModalBackground>
    );
  };
  
  export default CreateGuestBook;