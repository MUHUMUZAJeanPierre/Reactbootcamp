import { View, Text, Image, Dimensions, Pressable, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, Checkbox } from "react-native-paper";
import { FIREBASE_AUTH } from "./configaration"; 
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// import { FontAwesome5 } from "@expo/vector-icons";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [toggle, setToggle] = useState(false);

  // Basic email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validForm = ()=>{
    let valid  = true;

    if(!email.trim()){
      setEmailError("email is required");
      valid = false
    } else if (!isValidEmail(email)){
      setEmailError("email provided is invalid ")
    } else {
      setEmailError("");
    }

    if(!password.trim()){
      setPasswordError("password is invalid");
    } else{
      setPasswordError("");
    }


    return valid 
  }
   
  const handleLogin = async()=>{
    if(validForm()===true){
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email ,password);
      console.log(response);
      navigation.navigate('Home')

    }
  }

  
  
  return (
    <View
      style={{
        width: "100%",
        height: height,
        padding: 15,
        backgroundColor:"#26282C",
      }}
    >
    
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={{ height: 100 }}></View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "30%",
        }}
      >
        <View>
          <Text
            style={{
              color:"yellow",
              fontSize: 15,
              margin: 10,
              paddingTop: "8%",
              fontFamily: "Poppins_600SemiBold_Italic"
            }}
          >
            Please Login to enjoy more benefits and we{" "}
          </Text>
          <Text
            style={{
              color: "white",
            //   color: dark ? "black" : "white",
              fontSize: 15,
              alignItems: "center",
              textAlign: "center",
              paddingBottom: 13,
            }}
          >
            won't let You go
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "", height: "20%" }}>
        <TextInput
          label="Email Address"
          textColor="white"
          outCompleteType="email"
          theme={{colors: { primary: "#FFD130" }}}
          placeholderTextColor="white"
          value={email}
          error={!!emailError}
          onChangeText={(e) => setEmail(e)}
          right={<TextInput.Icon icon="email" color="#FDD130" />}
          style={{
            marginTop: 10,
            backgroundColor: "#26282C",
          }}
        />
       {emailError ? (<Text style={{color:"red", marginTop:10}}>{emailError}</Text>):null}
        <TextInput
          label="Password"
          secureTextEntry={!toggle} 
          textColor="white"
          theme={{ colors: { primary: "#FFD130" } }}
          right={
            <TextInput.Icon
              icon={toggle ? "eye" : "eye-off"}
              onPress={() => setToggle(!toggle)}
              color="#FFD130"
              size={20}
            />
          }
          placeholderTextColor="white"
          value={password}
          onChangeText={(p) => setPassword(p)}
          error={!!passwordError}
          style={{ marginTop: 10, backgroundColor: "#26282C" }}
        />
        {passwordError ? (<Text style={{color:"red", marginTop:1}}>{passwordError}</Text>) : null}
        <View style={{ backgroundColor: "", paddingRight: 8 }}>
          <Text style={{ textAlign: "right", margin: 18, color: "#FDD130" }}>
            Forget Password?
          </Text>
        </View>
      </View>
      <View style={{ height: "2%" }}></View>
      <View
        style={{ backgroundColor: "", height: "40%", alignItems: "center" }}
      >
        <Pressable
          onPress={() => {
            handleLogin()
            // validForm()
          }}
          style={{
            borderRadius: 4,
            backgroundColor: "#FDD130",
            width: "95%",
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Get Started</Text>
        </Pressable>
        <View
          style={{
            backgroundColor: "",
            width: "95%",
            borderRadius: 4,
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>or Simple Login with</Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "black",
            borderRadius: 4,
            width: "95%",
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Login With Apple</Text>
        </Pressable>
        <View style={{ height: "4%" }}></View>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 4,
            width: "95%",
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("www.google.com");
          }}
        >
          <Text style={{ color: "black" }}>Login with Google</Text>
        </Pressable>
        <View style={{ height: "10%" }}></View>
        <View>
          <Text style={{ color: "white", fontSize: 14 }}>
            Dont't have an account?{" "}
            <Pressable
              onPress={() => {
                // navigation.navigate("SignUp");
                validForm()
              }}
            >
              <Text style={{ color: "#FDD130", fontSize: 10 }}>Sign Up</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
};


export default Login;
