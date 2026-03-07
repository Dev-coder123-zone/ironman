import { useState } from "react";

export default function App() {

  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([]);
const [user, setuser] = useState()
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

    if(command.includes(" can you beat")){
      speak("No . i am only helping people")
    }

    if(command.includes("call" || 'call now')){
      speak("ok .. i will call the police .. call 112 .. call 112 .. call 112 .. call 112")
    }
  
       if(command.includes("emergency")){
      speak("ok .. i will call the police .. call 112 .. emergency .. emergency .. emergency .. emergency .. call 112 .. emergency.. call 112 .. call 112")
    }
  


        if(command.includes("fuck")){
      speak("ok .. i will call the police .. call 112 .. call 112 .. call 112 .. call 112")
    }

    if(command.includes("fight")){
      speak("No . i am only helping people . next question ask me")
    }

    if(command.includes("prime minister of india")){
      speak("prime misitor of india is .. mister narender modi")
    }

    if(command.includes("india"|| 'bharat' || 'hindustan')){
      speak("india is the largest economy and very powerfull country .. and indian people are very honestly .. 1947 did you know .. india is the best country ever and ever .. this is the next super power and next high economy country .. i loved it .. bharat mata ki jay .. vande matram")
    }

     if(command.includes('bharat')){
      speak("india is the largest economy and very powerfull country .. and indian people are very honestly .. 1947 did you know .. india is the best country ever and ever .. this is the next super power and next high economy country .. i loved it .. bharat mata ki jay ")
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

    
  const proccessCommand=()=>{
    if(command.includes('search')){
      const query=command.replace("search","").trim();
      speak(`Searching ${query}`)
      window.open(`https://www.google.com/search?q=${query}`)
    }
  }


  proccessCommand();

  

    if (command.includes("time"|| "what is the time"|| 'jarvish time')) {
      const time = new Date().toLocaleTimeString();
      speak(`Current time is ${time}`);
      return;
    }

if(command.includes('today'||' weather')){
      speak("ok i will try to open jarvish search max mod ");
      window.open("https://www.google.com/search?q=weather");
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


     if(command.includes("cricket match")){
        speak("ok i will try to open cricket match in youtube ")
        window.open("https://youtube.com/results?search_query=cricket+match")
       }

        if(command.includes("football match")){
        speak("ok i will try to open football match in youtube ")
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
        window.open("https://www.newsnation.com")
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
         
            if(command.includes("chemistry")){
        speak("i will try to open")
        window.open("https://www.youtube.com/results?search_query=chemistry+videos")
       }
  
         if(command.includes("biology")){
        speak("i will try to open")
        window.open("https://www.youtube.com/results?search_query=biology+videos")
       }
 
          if(command.includes("snapchat")){
        speak("i will try to open")
        window.open("https://www.snapchat.com")
       }


       if(command.includes("funny")){
        speak("i will try to open funny videos")
        window.open("https://youtube.com/results?search_query=funny+video")
       }

         if(command.includes("crickbuz" || 'cricbuzz')){
        speak("i will try to open")
        window.open("https://www.crickbuz.com")
       }

        if(command.includes("chalisa")){
        speak("i will try to open chalisa videos")
        window.open("https://youtube.com/results?search_query=hanumanchalisa+video")
       }

        if(command.includes("bhajan")){
        speak("i will try to open bhajan videos")
        window.open("https://youtube.com/results?search_query=bhajan+video")
       }

       if(command.includes("hanuman chalisa")){
        speak("ok i will try to open youtube and play hanuman chalisa")
        window.open("https://youtube.com/results?search_query=hanumanchalisa+video")
       }

       if(command.includes('jay shri ram')){
        speak("jay jay shree raam")
       }

       if(command.includes('jay')){
        speak("jay mata di")
       }

       if(command.includes("i kill you")){
        speak("naa .  munna . naa ")
       }



     if(command.includes("friend")){
      speak("true friend always win ... true friend always help any situations")
     }

    if(command.includes("friends")){
      speak("true friend always win ... true friend always help any situations")
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
        className={`mt-6 px-8 py-4  rounded-full text-lg font-bold transition 
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