import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
`;

const PostItItem = ({ message }) => (
  <PostIt>
    <Pin />
    {message}
  </PostIt>
);

const GestBookList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 방명록 데이터를 가져오는 함수
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/page/guestBook/list'); // 서버의 전체 URL을 사용
        setMessages(response.data);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('방명록을 가져오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
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
  );
};

export default GestBookList;
