import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const { password, username } = await readBody(event)
  console.log(password, username);
  
  if(password === "test") {
    return { ditItWork: true }
  } else if (password !== "" || !password) {
    throw createError({ statusCode: 400, message: 'Password is required' })
  }
  
  

  // // your password validation logic (e.g. compare against hash)
  // const isValid = password === 'secret123’;

  // return { valid: isValid }
})