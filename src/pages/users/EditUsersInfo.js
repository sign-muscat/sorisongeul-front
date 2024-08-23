import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditUsersInfo() {
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [keyword, setKeyword] = useState("");
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("/api/v1/users/me");
                if (response.ok) {
                    const data = await response.json();
                    setUserId(data.id);
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
        setProfileImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId) {
            alert("사용자 ID를 찾을 수 없습니다.");
            return;
        }

        const formData = new FormData();
        formData.append("password", password);
        formData.append("nickname", nickname);
        formData.append("keywords", keyword);
        if (profileImage) {
            formData.append("profileImage", profileImage);
        }

        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: "PUT",
                body: formData,
            });

            if (response.ok) {
                alert("회원정보가 성공적으로 수정되었습니다.");
                navigate("/mypage/mypageHome");
            } else {
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