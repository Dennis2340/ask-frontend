const mainUrl = 'http://localhost:3800'

type User = {
    userId?: string
    useremail: string
    username:string
    userPublicKey:string
}

export async function createUser(user:User | null){
  try {
    const request = await fetch(`${mainUrl}/user/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    return request.json()
  } catch (error) {
    console.log("this is the error", error)
  }
}

type Question = {
    userPublicKey:string
    useremail:string, 
    questionTitle:string, 
    questionBody:string,
    tags:string[]
}
export async function createQuestion(question: Question | null){
    try {
        const request = await fetch(`${mainUrl}/question/create`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(question)
        })
        return request.json()
    } catch (error) {
      console.log("this is the error", error)
    }
}