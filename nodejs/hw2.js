
const posts = [
    {id: "id 1",user: "user 1", title: "post 1"},
    {id: "id 2",user: "user 2", title: "pos 2"},
    {id: "id 3",user: "user 3", title: "post2 3"},
    {id: "id 4",user: "user 2", title: "poste 1"},
    {id: "id 5",user: "user 3", title: "random post 1"},
    {id: "id 6",user: "user 1", title: "this is post"},
]

const listPosts = ()=>{
    posts.map((post)=>{
        console.log(post)
    })
}

const addPost = (data)=>{
    return new Promise((resolve, reject) => {
        if(data){
            posts.push(data)
            resolve(posts)
        }else{
            reject("eklenirken hata")
        }
    })
    
}

async function showPosts(){
    try{
        const res = await addPost({id: "yeni post",user: "yeni post useri", title: "yeni post"});
        listPosts();
    }catch(e){
        console.log(e)
    }
}
showPosts();
