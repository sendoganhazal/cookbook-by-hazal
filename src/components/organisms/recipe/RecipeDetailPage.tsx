"use client"
import React,{useState,useEffect} from 'react'
import { useParams } from 'next/navigation'
export default function RecipeDetailPage() {
    const {id} = useParams();
  return (
    <div>RecipeDetailPage - Recipe id = {id}</div>
  )
}
