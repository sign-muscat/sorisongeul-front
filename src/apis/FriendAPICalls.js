import {statusToastAlert} from "../utils/ToastUtils";
import {request} from "./api";
import {getFriendApplies, getFriends, success} from "../modules/FriendReducer";

export const callGetFriendsAPI = () => {
    return async (dispatch, getState) => {
        try {
            const result = await request(
                'GET',
                `/api/v1/friends`
            );

            console.log('callGetFriendsAPI result : ', result.data);

            if(result.status === 200) {
                dispatch(getFriends(result));
            }

        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callGetFriendAppliesAPI = (applyType) => {
    return async (dispatch, getState) => {
        try {
            const queryString = `applyType=${applyType}`;

            const result = await request(
                'GET',
                `/api/v1/friends-apply?${queryString}`
            );

            console.log('callGetFriendAppliesAPI result : ', result.data);

            if(result.status === 200) {
                dispatch(getFriendApplies(result));
            }

        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callRequestFriendAPI = (toUser) => {
    return async (dispatch, getState) => {
        try {
            const result = await request(
                'POST',
                `/api/v1/friends/${toUser}`
            );

            console.log('callRequestFriendAPI result : ', result.data);

            if(result.status === 201) {
                dispatch(success());
            }
        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callHandleFriendRequestAPI = (friendId, friendStatus) => {
    return async (dispatch, getState) => {
        try {
            const queryString = `status=${friendStatus}`;
            const result = await request(
                'PUT',
                `/api/v1/friends/${friendId}?${queryString}`
            );

            console.log('callHandleFriendRequest result : ', result.data);

            if(result.status === 201) {
                dispatch(success());
            }
        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callCancelFriendApplyAPI = (friendId) => {
    return async (dispatch, getState) => {
        try {
            const result = await request(
                'DELETE',
                `/api/v1/friends-apply/${friendId}`
            );

            console.log('callCancelFriendApplyAPI result : ', result.data);

            if(result.status === 204) {
                dispatch(success());
            }
        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callDeleteFriendAPI = (friendId) => {
    return async (dispatch, getState) => {
        try {
            const result = await request(
                'DELETE',
                `/api/v1/friends/${friendId}`
            );

            console.log('callDeleteFriendAPI result : ', result.data);

            if(result.status === 204) {
                dispatch(success());
            }
        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}