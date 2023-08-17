import Editor from "@monaco-editor/react"
import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import { apiClient } from "../../../shared/services/api-client";

export const Ide = () => {
    const editorRef=useRef(null);
    const skeletonCode = `class Solution{
    public int show(int x,int y){
        return x+y;
    }
} `;
    const getCode=async()=>{
        const code=editorRef.current.getValue();
        console.log(code);
        const jsonObject={"code":code};
        try{
            const response=await apiClient.post(process.env.REACT_APP_CODE_URL,jsonObject);
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }
    const mount=(editor)=>{
        editorRef.current=editor;
    }
    return (
    <>
    <Editor
        height="80vh"
        defaultLanguage="java"
        defaultValue={skeletonCode}
        onMount={mount}
    />
    <Button onClick={getCode} variant="contained">Contained</Button>
    </>
    );
}
