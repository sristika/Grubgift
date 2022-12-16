import {Card, Grid} from "@mui/material";
import {Box, Container} from "@mui/system";
import React, {useEffect, useState} from "react";
import Messages from "../Messages";
import Navbar from "../Navbar";
import UserMessengerEntries from "../UserMessengerEntries";
import {retrieveChats} from "../../api/messages";
import {isLoggedIn} from "../../helpers/authHelper";
import {useLocation} from "react-router-dom";

const MessengerView = () => {
    const [conversant, setConversant] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [width, setWindowWidth] = useState(0);
    const mobile = width < 800;
    const user = isLoggedIn();
    const {state} = useLocation();
    const newConversant = state && state.user;

    const getConversation = (conversations, conversantId) => {
        for (let i = 0; i < conversations.length; i++) {
            const conversation = conversations[i];
            if (conversation.recipient._id === conversantId) {
                return conversation;
            }
        }
    };

    const fetchConversations = async () => {
        let conversations = await retrieveChats(user);
        if (newConversant) {
            setConversant(newConversant);
            if (!getConversation(conversations, newConversant._id)) {
                const newConversation = {
                    _id: newConversant._id,
                    recipient: newConversant,
                    new: true,
                    messages: [],
                };
                conversations = [newConversation, ...conversations];
            }
        }
        setConversations(conversations);
        setLoading(false);
    };

    useEffect(() => {
        fetchConversations();
    }, []);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <Container>
            <Navbar/>
            <Box>
                <Card sx={{padding: 0}}>
                    <Grid
                        container
                        sx={{height: "calc(100vh - 110px)"}}
                        alignItems="stretch"
                    >
                        {!mobile ? (
                            <>
                                <Grid
                                    item
                                    xs={5}
                                    sx={{
                                        borderRight: 1,
                                        borderColor: "divider",
                                        height: "100%",
                                    }}
                                >
                                    <UserMessengerEntries
                                        conservant={conversant}
                                        conversations={conversations}
                                        setConservant={setConversant}
                                        loading={loading}
                                    />
                                </Grid>

                                <Grid item xs={7} sx={{height: "100%"}}>
                                    <Messages
                                        conservant={conversant}
                                        conversations={conversations}
                                        setConservant={setConversant}
                                        setConversations={setConversations}
                                        getConversation={getConversation}
                                    />
                                </Grid>
                            </>
                        ) : !conversant ? (
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    borderRight: 1,
                                    borderColor: "divider",
                                    height: "100%",
                                }}
                            >
                                <UserMessengerEntries
                                    conservant={conversant}
                                    conversations={conversations}
                                    setConservant={setConversant}
                                    loading={loading}
                                />
                                <Box sx={{display: "none"}}>
                                    <Messages
                                        conservant={conversant}
                                        conversations={conversations}
                                        setConservant={setConversant}
                                        setConversations={setConversations}
                                        getConversation={getConversation}
                                    />
                                </Box>
                            </Grid>
                        ) : (
                                <Grid item xs={12} sx={{height: "100%"}}>
                                    <Messages
                                        conservant={conversant}
                                        conversations={conversations}
                                        setConservant={setConversant}
                                        setConversations={setConversations}
                                        getConversation={getConversation}
                                        mobile
                                    />
                                </Grid>
                            )}
                    </Grid>
                </Card>
            </Box>
        </Container>
    );
};

export default MessengerView;
