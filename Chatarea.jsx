import React, { useState, useEffect, useRef } from 'react';
import { 
    Send, User, Bot, Loader2, Info, Moon, Sun, 
    Zap, TrendingUp, Calendar, Users, Briefcase, ChevronRight, Check, Code, Shield, Brain
} from 'lucide-react';



// ----------------------------------------------------------------------
// 1.  COLLEGE DATA (Only keeping data necessary for UI text)
// ----------------------------------------------------------------------
const collegeData = {
    "ai_senior_profile": {
        "name": "Aaradhya Singh",
        "intro_message": "Hey! I am an AI senior from Medicaps University, '22 batch aur maine college ka har system, fest, placement rule, aur inhouse training personally experience kiya hai. Feel free to ask anything — placements se lekar fest ke outfit tak!"
    },
    "student_life": {
        "annual_events": [
            {
                "name": "Moonstone",
                "type": "Annual Cultural Fest",
                "description": "A 3-day cultural fest with music, themes, and celebrity",
            },
        ],
    },
    "on_campus_updates": [
        { "id": 1, "text": "490 students placed at TCS 2025 batch.", "icon": <TrendingUp className="w-4 h-4 text-green-400" /> },
        { "id": 2, "text": "Tatvic analytics comes by October and offer 6-12 LPA for tech roles.", "icon": <Briefcase className="w-4 h-4 text-purple-400" /> },
        { "id": 3, "text": "Placement drives resume on 15th December. Check POD.ai.", "icon": <Calendar className="w-4 h-4 text-yellow-400" /> },
    ],
    "tips_and_insights": [
        "U can apply for Outhouse internships by 3rd yr end that satisfy clg criterias.",
        "Companies usually come by August end during your 7th sem.",
        "GDSC, ACM, AWS Cloud Club, and Cultural Club are among the most vibrant student communities.",
        "Once placed in a certain slab, you can only apply for companies in higher slabs.",
        "U can now wear Medicaps Merchandise ON Monday Casuals.",
        "Start preparing for aptitude tests from the 5th semester.",
    ]
};

// ----------------------------------------------------------------------
// 2. THEME CONFIGURATION 
// ----------------------------------------------------------------------
const theme = {
    bg: 'bg-gray-900',
    header: 'bg-[#18181B] border-b border-gray-700',
    sidebar: 'bg-[#1F1F21] border-r border-gray-700',
    chatBg: 'bg-gray-800',
    inputBg: 'bg-[#18181B]',
    inputBorder: 'border-gray-700',
    text: 'text-gray-200',
    subText: 'text-gray-400',
    primary: 'bg-indigo-600 hover:bg-indigo-500',
    primaryText: 'text-white',
    aiBubble: 'bg-[#374151] text-gray-100',
    userBubble: 'bg-indigo-600 text-white',
    rightSidebar: 'bg-[#101012] border-l border-gray-700',
    divider: 'border-gray-700',
    badge: 'bg-[#4B5563] text-gray-300',
    badgeText: 'text-gray-300',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
};

// Mock data for the Home Page feature cards
const featureCards = [
    {
        title: "Smart AI Mentor",
        description: "Get instant advice powered by the smartest AI to land your dream opportunities.",
        icon: <Brain className="w-6 h-6 text-indigo-400" />,
        bgColor: 'bg-gray-800/50',
    },
    {
        title: "Career Strategies",
        description: "Build the right skills, make popular strategies to land a dream job anywhere.",
        icon: <Briefcase className="w-6 h-6 text-purple-400" />,
        bgColor: 'bg-gray-800/50',
    },
    {
        title: "Future Ready",
        description: "Stay ahead of industry trends and tech stacks like Python, AI/ML, and Blockchain.",
        icon: <Code className="w-6 h-6 text-cyan-400" />,
        bgColor: 'bg-gray-800/50',
    },
    {
        title: "Smart Learning",
        description: "Concise tips and insights from seniors to navigate college life easily.",
        icon: <Zap className="w-6 h-6 text-green-400" />,
        bgColor: 'bg-gray-800/50',
    },
];

// ----------------------------------------------------------------------
// 3. HOME PAGE COMPONENT
// ----------------------------------------------------------------------
const HomePage = ({ onStartChat }) => {
    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text} p-0 flex flex-col`}>
            {/* Nav Bar */}
            <nav className={`fixed top-0 left-0 right-0 z-10 ${theme.header} bg-opacity-70 backdrop-blur-sm shadow-md`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Zap className="w-6 h-6 text-indigo-400 mr-2" />
                            <span className="text-xl font-bold">AI College Senior</span>
                        </div>
                        
                        {/* Nav Links */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {['Features', 'About', 'Contact'].map(item => (
                                <a key={item} href="#" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${theme.subText} hover:text-white`}>
                                    {item}
                                </a>
                            ))}
                        </div>
                        
                        {/* Action Button */}
                        <button 
                            onClick={onStartChat}
                            className={`px-4 py-2 text-sm font-semibold rounded-full ${theme.button}`}
                        >
                            Chat Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 items-center">
                    {/* Left - Text and CTA */}
                    <div className="space-y-6">
                        <h1 className="text-6xl font-extrabold leading-tight">
                            Your <span className="bg-indigo-600 px-2 rounded-lg text-white">AI College</span> Senior Is Here
                        </h1>
                        <p className="text-lg text-gray-400 max-w-lg">
                            Navigate college like a pro from day one. Get personalized strategies, advice, and real-world insights that actually get it.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <button 
                                onClick={onStartChat}
                                className={`px-6 py-3 text-lg font-semibold rounded-full flex items-center ${theme.button}`}
                            >
                                Start Chatting <ChevronRight className="w-5 h-5 ml-2" />
                            </button>
                            <a href="#" className={`px-6 py-3 text-lg font-semibold rounded-full border border-gray-700 ${theme.text} hover:bg-gray-800 transition`}>
                                Learn More
                            </a>
                        </div>
                        
                        {/* Stats */}
                        <div className="flex space-x-10 pt-6">
                            <div>
                                <p className="text-4xl font-bold text-indigo-400">200+</p>
                                <p className="text-sm ${theme.subText}">Students Helped</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-indigo-400">46</p>
                                <p className="text-sm ${theme.subText}">Success Stories</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right - Image Placeholder */}
                    <div className="relative h-96 w-full hidden lg:block rounded-xl overflow-hidden shadow-2xl">
                        {/* Placeholder for the image in the sample UI */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 opacity-80"></div>
                        <img 
                            src="https://images.pexels.com/photos/10323334/pexels-photo-10323334.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                            alt="Student Coding" 
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                        />
                        <div className="absolute bottom-4 left-4 p-2 bg-black/50 rounded-lg text-xs font-mono">
                            console.log("Future Ready...");
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-20 text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
                        Powered by Innovation
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold ${theme.text}">
                        Everything you need for real-world experience
                    </p>
                    
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {featureCards.map((card, index) => (
                            <div key={index} className={`p-6 rounded-xl ${card.bgColor} backdrop-blur-lg border border-gray-700 hover:border-indigo-500 transition duration-300 shadow-xl space-y-3 text-left`}>
                                <div className="p-3 bg-indigo-900/50 rounded-full w-fit">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold ${theme.text}">{card.title}</h3>
                                <p className="text-sm ${theme.subText}">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Footer Placeholder */}
                <footer className="py-8 border-t border-gray-800 text-center text-sm text-gray-600">
                    © 2025 AI College Senior. All rights reserved.
                </footer>
            </main>
        </div>
    );
};

// ----------------------------------------------------------------------
// 4. CHAT AREA COMPONENT (Based on your previous App.jsx)
// ----------------------------------------------------------------------

const ChatArea = () => {
    // Only keeping UI related state and mocks, removing all API calls
    const [messages, setMessages] = useState([
        { role: 'ai', text: collegeData.ai_senior_profile.intro_message.replace(/Gemini/g, 'AI') },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); 
    const messagesEndRef = useRef(null);
    const quickFest = collegeData.student_life.annual_events.find(e => e.name === 'Moonstone');
    const suggestedQueries = [
        "Placements kab start hote hain?", 
        "First year ke subjects kya hain?",
        "Moonstone fest ke baare mein bataiye.",
        "Attendance policy kya hai?"
    ];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        // MOCK: Simulate chat response since API logic is removed
        setMessages(prev => [...prev, { role: 'user', text: trimmedInput }]);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessages(prev => [...prev, { role: 'ai', text: "Mera API server abhi mock mode mein hai. Lekin chinta mat karo, real logic bhi ready hai. Tumhara sawal tha: '" + trimmedInput + "'. Abhi main iska answer nahi de paunga." }]);
        }, 1500);
        setInput('');
    };

    const handleQuickQuery = (query) => {
        setMessages(prev => [...prev, { role: 'user', text: query }]);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessages(prev => [...prev, { role: 'ai', text: "Mock Response: This feature is handled by the Gemini API which is currently disabled for UI preview." }]);
        }, 1500);
    }
    
    return (
        <div className={`flex h-screen ${theme.bg} antialiased overflow-hidden`}>
            {/* Left Sidebar - Navigation & Quick Info */}
            <div className={`w-64 flex-shrink-0 ${theme.sidebar} flex flex-col`}>
                {/* Header/Logo */}
                <div className={`${theme.header} p-4 flex items-center`}>
                    <Zap className="w-8 h-8 text-indigo-400 mr-2" />
                    <h1 className={`text-xl font-bold ${theme.text}`}>AI College Senior</h1>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                    
                    {/* On-Campus Updates */}
                    <div className="p-4">
                        <h2 className={`text-sm font-semibold mb-2 uppercase ${theme.subText}`}>⚡ On-Campus Updates</h2>
                        <ul className="space-y-3">
                            {collegeData.on_campus_updates.map((update, index) => (
                                <li key={index} className={`flex items-start text-xs ${theme.text}`}>
                                    <span className="flex-shrink-0 mr-2 mt-0.5">{update.icon}</span>
                                    {update.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Divider */}
                    <div className={`mx-4 ${theme.divider}`}><hr /></div>

                    {/* Clg Tips & Insights */}
                    <div className="p-4">
                        <h2 className={`text-sm font-semibold mb-3 uppercase ${theme.subText}`}>🌟 Clg Tips & Insights</h2>
                        <ul className="space-y-3">
                            {collegeData.tips_and_insights.map((tip, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mr-2 mt-1" />
                                    <p className={`text-xs ${theme.text}`}>{tip}</p>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Moonstone Fest Card */}
                        <div className={`mt-4 p-3 rounded-lg border ${theme.inputBorder} bg-[#2D3748] shadow-lg`}>
                            <p className={`text-sm font-semibold ${theme.text}`}>{quickFest.name} - {quickFest.type}</p>
                            <p className={`text-xs ${theme.subText} mt-1`}>{quickFest.description}</p>
                        </div>
                    </div>
                </div>

                {/* Footer/Profile */}
                <div className={`p-4 ${theme.header} flex flex-col items-center`}>
                    <div className="flex items-center w-full justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-2">MS</div>
                            <div>
                                <p className={`text-sm font-semibold ${theme.text}`}>College Junior</p>
                                <p className={`text-xs ${theme.subText}`}>@student</p>
                            </div>
                        </div>
                        {/* Dark/Light Mode Toggle */}
                        <button 
                            onClick={() => setIsDarkMode(prev => !prev)}
                            className="p-2 rounded-full hover:bg-gray-700 transition"
                        >
                            {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-400" />}
                        </button>
                    </div>
                    <button className="w-full mt-3 p-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                        Upgraded to Pro
                    </button>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className={`flex-1 flex flex-col ${theme.chatBg}`}>
                {/* Chat Header */}
                <header className={`${theme.header} p-4 flex items-center justify-between`}>
                    <div className="flex items-center">
                        <div className="flex space-x-1 mr-3">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <h2 className={`text-sm font-semibold ${theme.text}`}>Welcome to Chat</h2>
                    </div>
                    {/* Mock Chat Button to go back to Home */}
                    <button 
                        onClick={() => {/* Implement state change to go back to Home */}} 
                        className={`px-4 py-2 text-sm font-semibold rounded-lg bg-gray-700 text-white hover:bg-gray-600`}
                    >
                        End Chat
                    </button>
                </header>

                {/* Chat Messages */}
                <main className={`flex-1 overflow-y-auto p-6 space-y-4 ${theme.chatBg} scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800`}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'ai' && <div className="flex-shrink-0 mr-3 mt-1"><Bot className="w-6 h-6 text-indigo-400 p-0.5 bg-indigo-800 rounded-full" /></div>}
                            <div className={`max-w-3/4 p-3 rounded-xl shadow-md ${msg.role === 'user' ? `${theme.userBubble} rounded-br-sm` : `${theme.aiBubble} rounded-tl-sm`}`}>
                                <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                            </div>
                            {msg.role === 'user' && <div className="flex-shrink-0 ml-3 mt-1"><User className="w-6 h-6 text-gray-300 p-0.5 bg-gray-600 rounded-full" /></div>}
                        </div>
                    ))}

                    {/* Loading Indicator */}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="flex-shrink-0 mr-3 mt-1"><Bot className="w-6 h-6 text-indigo-400 p-0.5 bg-indigo-800 rounded-full" /></div>
                            <div className={`${theme.aiBubble} p-3 rounded-xl rounded-tl-sm`}><Loader2 className="w-5 h-5 animate-spin text-indigo-400" /></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </main>

                {/* Suggestions / FAQ Chips */}
                {messages.length === 1 && (
                    <div className="px-6 pb-2">
                        <div className="flex flex-wrap gap-2">
                            {suggestedQueries.map((query, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickQuery(query)}
                                    className="px-3 py-1 text-xs bg-gray-700 text-indigo-300 rounded-full hover:bg-gray-600 transition duration-150 border border-indigo-900 shadow-lg"
                                >
                                    {query}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <footer className={`p-4 ${theme.inputBg} border-t ${theme.divider}`}>
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            className={`flex-1 p-3 ${theme.inputBg} ${theme.text} border ${theme.inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 placeholder-gray-500`}
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            className={`p-3 ${theme.button} rounded-lg disabled:bg-indigo-800 transition duration-150`}
                            disabled={!input.trim() || loading}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                    <div className='mt-2 text-center text-xs text-red-400 flex items-center justify-center'>
                        <Info className='w-3 h-3 mr-1'/> 
                        <span>MOCK CHAT MODE: API is disabled. Responses are simulated.</span>
                    </div>
                </footer>
            </div>
            {/* Right Sidebar - Trending/News (Removed the extra two cards to save space for now, use the previous code if needed) */}
            <div className={`w-64 flex-shrink-0 ${theme.rightSidebar} flex flex-col p-4`}>
                <h2 className={`text-sm font-bold mb-4 uppercase ${theme.subText}`}>Trending News</h2>
                
                {/* News Card 1 (Blockchain) */}
                <div className="mb-4">
                    <img 
                        src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                        alt="Blockchain" 
                        className="w-full h-24 object-cover rounded-lg mb-2" 
                    />
                    <div className="flex items-center mb-1">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        <p className={`text-sm font-semibold ${theme.text}`}>Blockchain Beyond Finance</p>
                    </div>
                    <p className={`text-xs ${theme.subText} mb-2`}>Decentralized systems are gaining...</p>
                    <p className={`text-xs ${theme.subText}`}>2 hours ago</p>
                </div>
                
                {/* News Card 2 (Low-Code) */}
                <div className="mb-4">
                    <img 
                        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                        alt="Low-Code" 
                        className="w-full h-24 object-cover rounded-lg mb-2" 
                    />
                     <div className="flex items-center mb-1">
                        <Zap className="w-4 h-4 text-green-400 mr-2" />
                        <p className={`text-sm font-semibold ${theme.text}`}>Low-Code/No-Code Dev</p>
                    </div>
                    <p className={`text-xs ${theme.subText} mb-2`}>Gartner predicts 80% of tech products...</p>
                    <p className={`text-xs ${theme.subText}`}>5 hours ago</p>
                </div>

                <button className={`w-full mt-auto p-3 text-sm font-semibold rounded-lg ${theme.button} flex items-center justify-center`}>
                    <Users className="w-4 h-4 mr-2" />
                    New Chat
                </button>
            </div>
        </div>
    );
}

// ----------------------------------------------------------------------
// 5. MAIN APP COMPONENT (Router/Conditional Renderer)
// ----------------------------------------------------------------------

function App() {
    const [view, setView] = useState('home'); // 'home' or 'chat'

    if (view === 'chat') {
        return <ChatArea />;
    }

    return <HomePage onStartChat={() => setView('chat')} />;
}

export default App;
