// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDx-FKApGKN0JV96Oni_1VsaNPkFtOjXAs",
    authDomain: "daichiapp-34c62.firebaseapp.com",
    databaseURL: "https://daichiapp-34c62.firebaseio.com",
    projectId: "daichiapp-34c62",
    storageBucket: "daichiapp-34c62.appspot.com",
    messagingSenderId: "90101265846",
    appId: "1:90101265846:web:4f02c66684d5125856bd17",
    measurementId: "G-NV32RLHNSY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const DB = firebase.firestore();
const FIRST = DB.collection('first');
const SECOND = DB.collection('second');

let hairetsu = [];
FIRST.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        data = doc.data();
        hairetsu.push([data.user_id, data.user_name]);
    });
    for(let i = 0; i < hairetsu.length; i++){
        let userList = document.getElementById("user-list");
        let li = document.createElement('li');
        li.textContent = hairetsu[i][0];
        userList.appendChild(li);
    }
});

function OnButtonClick() {
    let haire2 = [];
    SECOND.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data = doc.data();
            haire2.push([data.post_id, data.introduction]);
        });
        for(let i = 0; i < haire2.length; i++){
            let postList = document.getElementById("post-list");
            let li = document.createElement('li');
            li.textContent = haire2[i][0] + haire2[i][1];
            console.log(haire2[i][0]);
            postList.appendChild(li);
        }
    });
}

SECOND.doc("2").set({
    introduction: "登録したぞ～～",
    post_id: 2,
    post_name: "こうしん新規で登録したpostnameだよ★"
})
.then(()=>{
    console.log("更新に成功しました");
})
.catch((error)=>{
    console.log(`更新に失敗しました (${error})`);
});













































































