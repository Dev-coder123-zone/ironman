import { useState } from "react";

export default function App() {

  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([]);

  const recognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const startListening = () => {

    const recog = new recognition();
    recog.lang = "en-US";
    recog.start();

    setListening(true);

    recog.onresult = async (event) => {

      const speech = event.results[0][0].transcript;

      addMessage("You", speech);

      processCommand(speech.toLowerCase());

      setListening(false);
    };
  };

  const addMessage = (sender, text) => {

    setMessages((prev) => [...prev, { sender, text }]);
  };

  const speak = (text) => {

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.8;
    speech.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices[1];

    window.speechSynthesis.speak(speech);

    addMessage("Jarvis", text);
  };

  const processCommand = (command) => {

    if (command.includes("open youtube" || "youtube" || "jarvish open youtube")) {
      speak("Opening youtube")
      window.open("https://youtube.com");
      return;
    }

    if(command.includes("kya haal h")){
      speak("i am good and you")
    }

    if(command.includes('counting' || 'count')){
      for(let i=1;i<=10;i++){
        speak(` ${i}`);
      }
    }

   if(command.includes("i am " || "my self" || "hello my name")){
    speak("Nice to meet you how can i help you");
   }

   if(command.includes("open twitter"|| "twitter" || "jarvish open twiter")){
    speak("Opening twitter");
    window.open("https://twitter.com");
   }

   if(command.includes("mera naam "|| "naam"  || "mera naam ")){
      speak("nice to meet you . how can i help you");
        }

    if (command.includes("google" || "open google" || "jarvish open google")) {
      speak("Opening Google");
      window.open("https://google.com");
      return;
    }

    if (command.includes("time"|| "what is the time")) {
      const time = new Date().toLocaleTimeString();
      speak(`Current time is ${time}`);
      return;
    }
    
    if(command.includes("what's up" || "what'sup" || 'whatsup')){
      speak("Opening what's up ");
      window.open("https://what'sup.com");
    }

    if(command.includes("instagram"|| 'open instagram' || "jarvish open instagram")){
      speak("Opening instagram");
      window.open("https://instagram.com")
    }

   if(command.includes("my name is ")){
    speak("nice to meet you  my name is jarvish ")
   }

   if(command.includes("sorry")){
    speak("it's ok how can i help you ")
   }
    
if(command.includes("who are you")){
  speak("i am jarvish how can i help you")
}

     if(command.includes("hello"|| "HELLO"||"jarvish"  || "hello jarvish" || 'hello')){
        speak("nice to meet you  my name is jarvish ")
       }

       if(command.includes("what is your name")){
    speak("my name is jarvish nice to meet you")
   }
   
    if(command.includes("how are you" || "how r u")){
      speak("i am fine , how can i help you");
    }
     if(command.includes("who i am ")){
      speak("i dont know");
     }
    
   if(command.includes('study')){
    speak("ok boss i will try")
    window.open('https://youtube.com/results?search_query=study+class')
   }

     if(command.includes("help")){
      speak("how can i help you")
     }

      if(command.includes("crazy")){
        speak("what did you mean")
      }

       if(command.includes("math")){
        speak("Opening math class")
        window.open("https://youtube.com/results?search_query=math+class");
       }


     if(command.includes("cricket")){
        speak("ok i will try ")
        window.open("https://youtube.com/results?search_query=cricket+match")
       }

        if(command.includes("football")){
        speak("ok i will try ")
        window.open("https://youtube.com/results?search_query=football+match")
       }

        if(command.includes("match")){
        speak("ok i will try ")
        window.open("https://youtube.com/results?search_query=match")
       }

       if(command.includes("class")){
        speak("Opening class")
        window.open("https://youtube.com/results?search_query=study+class")
       }

       if(command.includes('phones')){
        speak("i will try")
        window.open("https://youtube.com/results?search_query=phones")
       }

       if(command.includes("phone")){
        speak("i will try")
        window.open("https://youtube.com/results?search_query=phones")
       }

       

       if(command.includes("news")){
        speak("i will try to open news")
        window.open("https://www.news.com")
       }


       if(command.includes("images")){
        speak("ok i will try to open")
        window.open("https://www.nature.com")
       }

       if(command.includes("songs")){
        speak("ok i will try ")
        window.open("https://youtube.com/results?search_query=songs")
       }

        if(command.includes("song")){
        speak("ok i will try ")
        window.open("https://youtube.com/results?search_query=songs")
       }

       if(command.includes('iphone')){
        speak("ok i will try to open iphone videos")
        window.open("https://youtube.com/results?search_query=iphones")
       }

     if(command.includes("music")){
        speak("ok i will try ")
        window.open("https://youtube.com/results?search_query=music")
       }
         
       if(command.includes("image")){
       speak('ok i will try to open')
       window.open("https://source.unsplash.com/random")
       }

       if(command.includes("physics")){
        speak("i will try to open")
        window.open("https://www.youtube.com/@physicsWallah")
       }

       if(command.includes("funny")){
        speak("i will try to open funny videos")
        window.open("https://youtube.com/results?search_query=funny+video")
       }

        if(command.includes("chalisa")){
        speak("i will try to open funny videos")
        window.open("https://youtube.com/results?search_query=hanumanchalisa+video")
       }

       if(command.includes("hanuman")){
        speak("jay shree raam")
        window.open("https://youtube.com/results?search_query=hanumanchalisa+video")
       }

       if(command.includes('jay shri ram')){
        speak("jay jay shree raam")
       }

       if(command.includes('jay')){
        speak("jay mata di")
       }


     

  };

  return (
    <div className="min-h-screen bg-blue-950 from-black via-gray-900 to-blue-900 text-white flex flex-col items-center p-6">

      <h1 className="text-4xl font-bold mb-4 text-cyan-400">
        JARVIS Voice Assistant
      </h1>

      <div className="w-full max-w-md bg-black/40 backdrop-blur-lg rounded-xl p-4 h-96 overflow-y-auto shadow-lg">

        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <span className="font-bold text-cyan-300">
              {msg.sender}:
            </span>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <button
        onClick={startListening}
        className={`mt-6 px-8 py-4 rounded-full text-lg font-bold transition 
        ${
          listening
            ? "bg-red-500 animate-pulse"
            : "bg-cyan-500 hover:bg-cyan-600"
        }`}
      >
        {listening ? "Listening..." : "Ask me anything 🎤"}
      </button>

    </div>
  );
}