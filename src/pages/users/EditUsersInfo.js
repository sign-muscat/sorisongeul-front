import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditUsersInfo() {
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [profileImage, setProfileImage] = useState(null); // 프로필 이미지 파일
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("/api/users/me");
                if (response.ok) {
                    const data = await response.json();
                    setNickname(data.nickname);
                    setKeyword(data.keyword);
                } else {
                    alert("사용자 정보를 가져오는 데 실패했습니다.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                alert("사용자 정보를 가져오는 중 오류가 발생했습니다.");
            }
        };

        fetchUserData();
    }, []);

    const handleFileChange = (e) => {
        setProfileImage(e.target.files[0]); // 선택된 파일을 상태에 저장
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 폼 데이터 객체 생성
        const formData = new FormData();
        formData.append("password", password);
        formData.append("nickname", nickname);
        formData.append("keyword", keyword);
        if (profileImage) {
            formData.append("profileImage", profileImage); // 파일 추가
        }

        try {
            const response = await fetch("/api/users/update", {
                method: "PUT",
                body: formData, // FormData 객체 전송
            });

            if (response.ok) {
                // 성공적으로 수정된 경우
                alert("회원정보가 성공적으로 수정되었습니다.");
                navigate("/mypage/mypageHome"); // 성공 후 리다이렉트
            } else {
                // 오류 처리
                alert("회원정보 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("회원정보 수정 중 오류가 발생했습니다.");
        }
    };

    return (
        <Box p={5}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="nickname">
                        <FormLabel>닉네임</FormLabel>
                        <Input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="닉네임을 입력하세요"
                        />
                    </FormControl>

                    <FormControl id="password">
                        <FormLabel>비밀번호</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력하세요"
                        />
                    </FormControl>

                    <FormControl id="profileImage">
                        <FormLabel>프로필 이미지</FormLabel>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </FormControl>

                    <FormControl id="keyword">
                        <FormLabel>관심사 키워드</FormLabel>
                        <Textarea
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="관심사 키워드를 입력하세요"
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="blue">
                        수정 저장
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default EditUsersInfo;
