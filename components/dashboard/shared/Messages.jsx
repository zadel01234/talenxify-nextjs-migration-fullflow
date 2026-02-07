'use client'
import React, { useState, useRef, useEffect } from 'react';
import { conversations as initialConversations } from './MessagesMockData';

// ─── Avatar with online dot ─────────────────────────────────────

const Avatar = ({ src, name, isOnline, size = 'md' }) => {
    const dims = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
    const dotDims = size === 'sm' ? 'w-2.5 h-2.5 border-[1.5px]' : size === 'lg' ? 'w-3.5 h-3.5 border-2' : 'w-3 h-3 border-2';

    return (
        <div className="relative flex-shrink-0">
            <img
                src={src}
                alt={name}
                className={`${dims} rounded-full object-cover`}
            />
            {isOnline && (
                <span className={`absolute bottom-0 right-0 ${dotDims} bg-green-500 border-white rounded-full`} />
            )}
        </div>
    );
};

// ─── Conversation list item ─────────────────────────────────────

const ConversationItem = ({ conversation, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors text-left ${isSelected
            ? 'bg-indigo-50'
            : 'hover:bg-gray-50'
            }`}
    >
        <Avatar src={conversation.avatar} name={conversation.name} isOnline={conversation.isOnline} />

        {/* Text block — truncates cleanly */}
        <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
                <span className={`text-sm truncate ${isSelected ? 'font-semibold text-gray-900' : 'font-medium text-gray-800'}`}>
                    {conversation.name}
                </span>
                <span className="text-xs text-gray-400 flex-shrink-0 whitespace-nowrap">{conversation.time}</span>
            </div>
            <div className="flex items-center justify-between gap-2 mt-0.5">
                <span className="text-xs text-gray-400 truncate">{conversation.role}</span>
                {conversation.unread > 0 && (
                    <span className="bg-indigo-600 text-white text-xs font-semibold min-w-[1.25rem] h-5 flex items-center justify-center rounded-full px-1 flex-shrink-0">
                        {conversation.unread}
                    </span>
                )}
            </div>
        </div>
    </button>
);

// ─── Chat bubble ────────────────────────────────────────────────

const ChatBubble = ({ message }) => {
    const isMe = message.sender === 'me';

    return (
        <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end gap-2 max-w-[75%] sm:max-w-[65%] ${isMe ? 'flex-row-reverse' : ''}`}>
                <div
                    className={`rounded-2xl px-4 py-2.5 ${isMe
                        ? 'bg-indigo-600 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                        }`}
                >
                    {/* Split on newlines to preserve paragraph breaks */}
                    {message.text.split('\n').map((line, i) => (
                        <p key={i} className={`text-sm leading-relaxed ${i > 0 ? 'mt-1' : ''}`}>{line}</p>
                    ))}
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0 mb-0.5">{message.time}</span>
            </div>
        </div>
    );
};

// ─── Empty chat placeholder ─────────────────────────────────────

const EmptyChat = () => (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-3">
        <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinejoin="round" />
            </svg>
        </div>
        <p className="text-gray-500 text-sm font-medium">Select a conversation</p>
        <p className="text-gray-400 text-xs">Choose a message from the left to start chatting</p>
    </div>
);

// ─── Main Messages page ────────────────────────────────────────

const Messages = () => {
    const [conversations, setConversations] = useState(initialConversations);
    const [selectedId, setSelectedId] = useState(null);
    const [search, setSearch] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const selected = conversations.find((c) => c.id === selectedId) || null;

    // Filter conversations by search
    const filtered = conversations.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.role.toLowerCase().includes(search.toLowerCase())
    );

    // Auto-scroll to latest message whenever selected conversation or its messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selected?.messages]);

    // Mark unread as 0 when a conversation is opened
    const handleSelect = (id) => {
        setSelectedId(id);
        setConversations((prev) =>
            prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
        );
    };

    // Send a message
    const handleSend = () => {
        const trimmed = newMessage.trim();
        if (!trimmed || !selectedId) return;

        setConversations((prev) =>
            prev.map((c) => {
                if (c.id !== selectedId) return c;
                const now = new Date();
                const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
                return {
                    ...c,
                    lastMessage: trimmed.length > 45 ? trimmed.slice(0, 45) + '...' : trimmed,
                    time: 'Just now',
                    messages: [...c.messages, { id: Date.now(), sender: 'me', text: trimmed, time }],
                };
            })
        );
        setNewMessage('');
    };

    // ── Layout helpers ──
    // On mobile: show sidebar when nothing selected, show chat when selected
    // On md+: always show both panels side by side

    const sidebarClasses = selectedId
        ? 'hidden md:flex'   // hide sidebar on mobile when chat is open
        : 'flex md:flex';    // show sidebar when no chat selected

    const chatClasses = selectedId
        ? 'flex md:flex'     // show chat on mobile when selected
        : 'hidden md:flex';  // hide chat on mobile, show empty state on desktop

    return (
        <div className="min-h-screen bg-gray-50 flex px-4 py-6 sm:px-6 lg:px-8 mt-13">
            <div className="w-full max-w-7xl bg-white flex h-[calc(100vh-5rem)] overflow-hidden">

                {/* ── LEFT SIDEBAR ────────────────────────────── */}
                <div className={`${sidebarClasses} flex-col w-full md:w-80 md:flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-100`}>
                    {/* Title + Search */}
                    <div className="p-4 border-b border-gray-100">
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">Messages</h1>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search messages"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <svg viewBox="0 0 20 20" className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.8}>
                                <circle cx="8.5" cy="8.5" r="5.5" />
                                <path d="M12.5 12.5l3 3" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Conversation list */}
                    <div className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
                        {filtered.length > 0 ? (
                            filtered.map((conv) => (
                                <ConversationItem
                                    key={conv.id}
                                    conversation={conv}
                                    isSelected={conv.id === selectedId}
                                    onClick={() => handleSelect(conv.id)}
                                />
                            ))
                        ) : (
                            <p className="text-center text-xs text-gray-400 py-8">No conversations found</p>
                        )}
                    </div>
                </div>

                {/* ── RIGHT CHAT PANEL ────────────────────────── */}
                <div className={`${chatClasses} flex-col flex-1 min-w-0`}>

                    {selected ? (
                        <>
                            {/* Chat header */}
                            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 flex-shrink-0">
                                {/* Back button — visible on mobile only */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="md:hidden text-gray-500 hover:text-indigo-600 transition-colors flex-shrink-0"
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <Avatar src={selected.avatar} name={selected.name} isOnline={selected.isOnline} size="lg" />

                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-gray-900 truncate">{selected.name}</p>
                                    <p className="text-xs text-gray-500 truncate">{selected.role}</p>
                                    <p className="text-xs text-gray-400 truncate">
                                        {selected.isOnline ? 'Online' : 'Offline'}
                                    </p>
                                </div>
                            </div>

                            {/* Message bubbles — scrollable area */}
                            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                                {selected.messages.map((msg) => (
                                    <ChatBubble key={msg.id} message={msg} />
                                ))}
                                {/* Invisible anchor for auto-scroll */}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input bar */}
                            <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0">
                                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                                    {/* Attachment icon */}
                                    <button className="text-gray-400 hover:text-indigo-500 transition-colors flex-shrink-0">
                                        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                        </svg>
                                    </button>

                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
                                    />

                                    {/* Send button */}
                                    <button
                                        onClick={handleSend}
                                        disabled={!newMessage.trim()}
                                        className={`flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${newMessage.trim()
                                            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                            : 'bg-indigo-200 text-indigo-400 cursor-not-allowed'
                                            }`}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        // Desktop empty state (no conversation selected)
                        <EmptyChat />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messages;