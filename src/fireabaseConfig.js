
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {    
    apiKey: "AIzaSyD8to9cVK3k3sBky9WbnZ880W0kS5Lsuig",
    authDomain: "utopia-caf8e.firebaseapp.com",
    projectId: "utopia-caf8e",
    storageBucket: "utopia-caf8e.appspot.com",
    messagingSenderId: "770034865434",
    appId: "1:770034865434:web:de78c22b21c134c96c08a3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.
provider.setCustomParameters({prompt: 'select_account'});
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.