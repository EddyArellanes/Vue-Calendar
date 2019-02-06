  // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs

  'use strict';  
  const functions = require('firebase-functions');
  const {WebhookClient} = require('dialogflow-fulfillment');
  const {Card, Suggestion} = require('dialogflow-fulfillment');
  const {Payload} = require('dialogflow-fulfillment'); 
  process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
   
  exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));    
   
    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }
   
    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }
    function requestDate(agent){ 

      const buttonTemplate =  
      {           
        attachment: {
          type: "template",
          payload: {
            template_type: "button",
            text: "Agendar Cita",  
            image_url: "https://www.en-dependencia.com/wp-content/uploads/2017/05/Cita-medica.jpg",
            buttons: [
              {
                type: "web_url",
                url: `https://eddyarellanes.github.io/calendar?name=Usuario`,                      
                webview_height_ratio: "full",
                messenger_extensions: true,
                title: "Agendar"                
              }
            ]
          }
        }
      };      
      const genericTemplate =
      {
        attachment: {
          type: "template",
          payload: {
            template_type:"generic",
            elements:[
              {
                title:"Agendar Cita",
                image_url: "https://www.en-dependencia.com/wp-content/uploads/2017/05/Cita-medica.jpg",
                subtitle:"Crea tu cita de forma sencilla",/*,
                default_action: {
                  type: "web_url",
                  url: "https://eddyarellanes.github.io/calendar/",
                  messenger_extensions: true,
                  webview_height_ratio: "full",
                }*/
                buttons:[
                  {
                    type:"web_url",
                    url:"https://eddyarellanes.github.io/calendar",
                    webview_height_ratio: "full",
                    messenger_extensions: true,
                    title:"Agendar"                                      
                  }
                  /*Postback Example
                  {
                    type:"postback",
                    title:"Start Chatting",
                    payload:"DEVELOPER_DEFINED_PAYLOAD"
                  }  
                  */
                ]      
              },
            ]
          }
        }
      };
        
      agent.add( new Payload(agent.FACEBOOK, genericTemplate ));
    }
    function showLocations(){
      const genericTemplate =
      {
        attachment: {
          type: "template",
          payload: {
            template_type:"generic",
            elements:[
              {
                title:"Caja Costarricense de Seguro Social",
                image_url: "https://lh5.googleusercontent.com/p/AF1QipMiy95pzeINKWkovhqc4KmUO-Wg26Q3L0dhSpDu=w408-h306-k-no",
                subtitle:"Calle 4 María Eugenia Madrigal, Provincia de Alajuela, Atenas",                
                buttons:[
                  {
                    type:"web_url",
                    url:"https://www.google.com.mx/maps/place/Dirección+Regional+de+Servicios+de+Salud+Chorotega/@9.5889176,-84.644843,8.03z/data=!4m8!1m2!2m1!1sCaja+Costarricense+de+Seguro+Social!3m4!1s0x0:0x9afa5d53ff3e5c02!8m2!3d10.6265289!4d-85.4393005",
                    webview_height_ratio: "full",
                    messenger_extensions: true,
                    title:"Ver Mapa"                                      
                  }                
                ]      
              },
              {
                title:"Sucursal CCSS San Carlos",
                image_url: "https://lh5.googleusercontent.com/p/AF1QipNjk-N5tSDoDV_gbOf67PUyHUVG9cq3RW9v670=w408-h229-k-no",
                subtitle:"Provincia de Alajuela, Cd Quesada",                
                buttons:[
                  {
                    type:"web_url",
                    url:"https://www.google.com.mx/maps/place/Sucursal+CCSS+San+Carlos/@9.5889176,-84.644843,8.03z/data=!4m8!1m2!2m1!1sCaja+Costarricense+de+Seguro+Social!3m4!1s0x0:0x3decb3d2019e3b23!8m2!3d10.3280922!4d-84.4316483",
                    webview_height_ratio: "full",
                    messenger_extensions: true,
                    title:"Ver Mapa"                                      
                  }
                ]      
              },
              {
                title:"Caja Costarricense de Seguro Social",
                image_url: "https://lh5.googleusercontent.com/p/AF1QipO8kwuOb9QiTXJNmN1ewFs3BrfVcIEhMu_XnjFs=w408-h393-k-no",
                subtitle:"Costado norte del Cementerio de Tres Ríos, 251, Provincia de Cartago, Tres Rios",                
                buttons:[
                  {
                    type:"web_url",
                    url:"https://www.google.com.mx/maps/place/Caja+Costarricense+de+Seguro+Social/@9.5889176,-84.644843,8.03z/data=!4m8!1m2!2m1!1sCaja+Costarricense+de+Seguro+Social!3m4!1s0x0:0x63e572a797c756b2!8m2!3d9.9089945!4d-83.9911652",
                    webview_height_ratio: "full",
                    messenger_extensions: true,
                    title:"Ver Mapa"                                      
                  }
                  /*Postback Example
                  {
                    type:"postback",
                    title:"Start Chatting",
                    payload:"DEVELOPER_DEFINED_PAYLOAD"
                  }  
                  */
                ]      
              },
            ]
          }
        }
      };
      agent.add( new Payload(agent.FACEBOOK, genericTemplate ));
    }

 
    // function yourFunctionHandler(agent) {
    //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
    //   agent.add(new Card({
    //       title: `Title: this is a card title`,
    //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
    //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
    //       buttonText: 'This is a button',
    //       buttonUrl: 'https://assistant.google.com/'
    //     })
    //   );
   
    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('RequestDate', requestDate);

    //intentMap.set('RequestLocation - custom', showLocations); 
    // intentMap.set('your intent name here', yourFunctionHandler);

    agent.handleRequest(intentMap);
  });
