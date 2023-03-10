import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [isInfoUserModalOpen, setIsInfoUserModalOpen] = useState(false);
    const [isInfoGroupModalOpen, setIsInfoGroupModalOpen] = useState(false);
    const [isUpdateInfoUserModalOpen, setIsUpdateInfoUserModalOpen] =
        useState(false);
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [isAddGroupModalOpen, setIsAddGroupModalOpen] = useState(false);
    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
    const [isAddFriendModalOpen, setIsAddFriendModalOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [isLogoutChatRoomModalOpen, setIsLogoutChatRoomModalOpen] =
        useState(false);
    const [isShowChatRoomInfo, setIsShowChatRoomInfo] = useState(false);
    const [isDeleteChatHistoryModalOpen, setIsDeleteChatHistoryModalOpen] =
        useState(false);
    const [isDeleteGroupModalOpen, setIsDeleteGroupModalOpen] = useState(false);
    const [isRenameGroupModalOpen, setIsRenameGroupModalOpen] = useState(false);
    const [isSearchInput, setIsSearchInput] = useState(false);
    const [isMessageWindow, setIsMessageWindow] = useState(true);
    const [isFriendWindow, setIsFriendWindow] = useState(true);
    const [contacts, setContacts] = useState([]);
    const [user, setUser] = useState();
    const [room, setRoom] = useState(undefined);
    const [roomChat, setRoomChat] = useState(undefined);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [rooms, setRooms] = useState([]);
    const [isShowInfoRoom, setShowInfoRoom] = useState(false);
    const [currentsocket, setcurrentsocket] = useState();
    const [listCurrentFriend, setListCurrentFriend] = useState([]);
    const [isInfoUserOtherModalOpen, setIsInfoUserOtherModalOpen] =
        useState(false);
    const [currentSearch, setCurrentSearch] = useState([]);
    const currentUser = JSON.parse(
        localStorage.getItem("chat-app-current-user")
    );
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isOpenNotify, setIsOpenNotify] = useState(false);
    const [title, setTilte] = useState("B???n c?? mu???n ????ng xu???t kh???i Yola");
    const [listRequest, setListRequest] = useState([]);
    const [listSendedRequest, setListSendedRequest] = useState([]);
    const [sendedRequest, setSendedRequst] = useState(true);
    const [searchInListFriend, setSearchInListFriend] = useState([]);
    const [listSearchInFriend, setListSearchInFriend] = useState([]);
    const [listWait, setListWait] = useState([]);

    // const dropdownRef = useRef(null);
    // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const clearState = () => {
        setIsOpenNotify(false);
        setIsInfoUserModalOpen(false);
        setIsInfoGroupModalOpen(false);
        setIsUpdateInfoUserModalOpen(false);
        setIsAddUserModalOpen(false);
        setIsAddGroupModalOpen(false);
        setIsAddMemberModalOpen(false);
        setIsLogoutModalOpen(false);
        setIsLogoutChatRoomModalOpen(false);
        setIsShowChatRoomInfo(false);
        setIsDeleteChatHistoryModalOpen(false);
        setIsDeleteGroupModalOpen(false);
        setIsRenameGroupModalOpen(false);
        setIsInfoUserOtherModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                setListWait,
                listWait,
                setListSearchInFriend,
                // User Search trong danh s??ch b???n b??
                listSearchInFriend,
                setSearchInListFriend,
                //Bi???n search trong danh s??ch b???n b?? hi???n t???i
                searchInListFriend,
                //Danh s??ch c??c y??u c???u k???t b???n ???? g???i
                setSendedRequst,
                sendedRequest,
                listSendedRequest,
                setListSendedRequest,
                //Danh s??ch y??u c???u k???t b???n
                listRequest,
                setListRequest,
                //S??? ??i???n tho???i ??ang search
                phoneNumber,
                setPhoneNumber,
                // User hi???n t???i s??? d???ng h??? th???ng
                currentUser,
                // User ??ang mu???n t??m ki???m
                currentSearch,
                setCurrentSearch,
                isInfoUserOtherModalOpen,
                setIsInfoUserOtherModalOpen,
                // Danh s??ch User trong danh s??ch b???n b??
                listCurrentFriend,
                title,
                setTilte,
                isOpenNotify,
                setIsOpenNotify,
                setListCurrentFriend,
                isInfoUserModalOpen,
                setIsInfoUserModalOpen,
                isInfoGroupModalOpen,
                setIsInfoGroupModalOpen,
                isUpdateInfoUserModalOpen,
                setIsUpdateInfoUserModalOpen,
                isAddUserModalOpen,
                setIsAddUserModalOpen,
                isAddGroupModalOpen,
                setIsAddGroupModalOpen,
                isAddMemberModalOpen,
                setIsAddMemberModalOpen,
                isAddFriendModalOpen,
                setIsAddFriendModalOpen,
                isLogoutModalOpen,
                setIsLogoutModalOpen,
                isLogoutChatRoomModalOpen,
                setIsLogoutChatRoomModalOpen,
                isShowChatRoomInfo,
                setIsShowChatRoomInfo,
                isDeleteChatHistoryModalOpen,
                setIsDeleteChatHistoryModalOpen,
                isDeleteGroupModalOpen,
                setIsDeleteGroupModalOpen,
                isRenameGroupModalOpen,
                setIsRenameGroupModalOpen,
                isSearchInput,
                setIsSearchInput,
                isMessageWindow,
                setIsMessageWindow,
                isFriendWindow,
                setIsFriendWindow,
                contacts,
                setContacts,
                user,
                setUser,
                room,
                setRoom,
                roomChat,
                setRoomChat,
                currentChat,
                setCurrentChat,
                rooms,
                setRooms,
                currentsocket,
                setcurrentsocket,
                // isActive,
                // setIsActive,
                clearState,
                isShowInfoRoom,
                setShowInfoRoom,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
