var _0x127a30=_0x5dc2;(function(_0x350420,_0x5e43de){var _0x2cad28=_0x5dc2,_0x32573b=_0x350420();while(!![]){try{var _0x1f61d0=-parseInt(_0x2cad28(0x18c))/0x1*(-parseInt(_0x2cad28(0x19c))/0x2)+parseInt(_0x2cad28(0x17b))/0x3*(-parseInt(_0x2cad28(0x18b))/0x4)+parseInt(_0x2cad28(0x17d))/0x5*(parseInt(_0x2cad28(0x183))/0x6)+-parseInt(_0x2cad28(0x192))/0x7*(parseInt(_0x2cad28(0x188))/0x8)+parseInt(_0x2cad28(0x19f))/0x9*(-parseInt(_0x2cad28(0x18e))/0xa)+-parseInt(_0x2cad28(0x17c))/0xb+parseInt(_0x2cad28(0x174))/0xc;if(_0x1f61d0===_0x5e43de)break;else _0x32573b['push'](_0x32573b['shift']());}catch(_0x367728){_0x32573b['push'](_0x32573b['shift']());}}}(_0x56b9,0x44773));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{GoogleAuthProvider,getAuth,signInWithEmailAndPassword,fetchSignInMethodsForEmail,onAuthStateChanged,signOut,sendPasswordResetEmail,signInWithPopup,OAuthProvider}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';import{getFirestore,doc,setDoc,getDoc,collection,getDocs}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';var username,score=0x0,tries=0x0,correctAnswer=0x0;function _0x56b9(){var _0x4a86a4=['1432641DYfCWl','question','username','math-quiz-9f398','AIzaSyD6su1cHYsxq2GXzwtJTFeTaR98gZtluK4','forEach','Correct','leaderboard','style','exists','497282ADjuMm','addEventListener','\x20-\x20','9OyCUXy','tries','click','\x20+\x20','then','textContent','G-DT1EDQRP12','score','Score:\x20','charAt','No\x20such\x20document!','PLEASE\x20WAIT\x20WHILE\x20WE\x20LOAD\x20YOUR\x20DATA.','option3','none','value','random','data','\x0a\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Username</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Score</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>','start','6120780AicFjT','innerHTML','option1','users','Quiz','math-quiz-9f398.firebaseapp.com','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>','5517gtwPcx','3907629XeuaQJ','685HtHEYr','log','error','display','getElementById','math-quiz-9f398.firebasestorage.app','13674zyhVwt','option2','floor','option4','630588276904','8WtrqTx','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','Error\x20saving\x20data:','40fZNqQc','2sEYtgq','1:630588276904:web:f59d3ace021a85122d829d','4608430lIGoox','startbody','option','push'];_0x56b9=function(){return _0x4a86a4;};return _0x56b9();}const firebaseConfig={'apiKey':_0x127a30(0x196),'authDomain':_0x127a30(0x179),'projectId':_0x127a30(0x195),'storageBucket':_0x127a30(0x182),'messagingSenderId':_0x127a30(0x187),'appId':_0x127a30(0x18d),'measurementId':_0x127a30(0x1a5)},app=initializeApp(firebaseConfig),db=getFirestore(app);async function loadLeaderboard(){var _0x418c11=_0x127a30;const _0x4945d7=collection(db,_0x418c11(0x177)),_0x28ec0d=await getDocs(_0x4945d7);document[_0x418c11(0x181)](_0x418c11(0x199))[_0x418c11(0x175)]='',document[_0x418c11(0x181)]('leaderboard')[_0x418c11(0x175)]+=_0x418c11(0x172),_0x28ec0d[_0x418c11(0x197)](_0x369136=>{var _0x4bc5e6=_0x418c11;document[_0x4bc5e6(0x181)](_0x4bc5e6(0x199))[_0x4bc5e6(0x175)]+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x369136['id']+_0x4bc5e6(0x189)+_0x369136[_0x4bc5e6(0x171)]()[_0x4bc5e6(0x1a6)]+'/'+_0x369136[_0x4bc5e6(0x171)]()[_0x4bc5e6(0x1a0)]+_0x4bc5e6(0x17a),console['log'](_0x369136['id'],'=>',_0x369136[_0x4bc5e6(0x171)]());});}loadLeaderboard();async function loadData(_0x3eb309){var _0x1d8312=_0x127a30;try{const _0xdbceca=doc(db,_0x1d8312(0x177),_0x3eb309),_0x484650=await getDoc(_0xdbceca);if(_0x484650[_0x1d8312(0x19b)]()){const _0x29300d=_0x484650[_0x1d8312(0x171)]();score=_0x29300d['score'],tries=_0x29300d['tries'],document[_0x1d8312(0x181)](_0x1d8312(0x1a6))['innerHTML']=_0x1d8312(0x1a7)+score+'/'+tries;}else console[_0x1d8312(0x17e)](_0x1d8312(0x1a9));}catch(_0x1b97ca){console[_0x1d8312(0x17f)]('Error\x20loading\x20data:',_0x1b97ca);}}function _0x5dc2(_0x189d8e,_0x1d0550){var _0x56b97c=_0x56b9();return _0x5dc2=function(_0x5dc20e,_0x14b694){_0x5dc20e=_0x5dc20e-0x171;var _0x34f453=_0x56b97c[_0x5dc20e];return _0x34f453;},_0x5dc2(_0x189d8e,_0x1d0550);}async function saveData(_0x38c485,_0x2d14d3,_0x48fa47){var _0x1931a6=_0x127a30;try{const _0x36e71d=doc(db,_0x1931a6(0x177),_0x38c485);await setDoc(_0x36e71d,{'score':_0x2d14d3,'tries':_0x48fa47}),console['log']('Data\x20saved\x20successfully!');}catch(_0x27cf72){console[_0x1931a6(0x17f)](_0x1931a6(0x18a),_0x27cf72);}}document[_0x127a30(0x181)](_0x127a30(0x178))['style'][_0x127a30(0x180)]=_0x127a30(0x1ac),document[_0x127a30(0x181)](_0x127a30(0x173))['addEventListener'](_0x127a30(0x1a1),function(){var _0x14dcf4=_0x127a30;document[_0x14dcf4(0x181)](_0x14dcf4(0x18f))[_0x14dcf4(0x19a)][_0x14dcf4(0x180)]=_0x14dcf4(0x1ac),alert(_0x14dcf4(0x1aa)),loadData(document[_0x14dcf4(0x181)](_0x14dcf4(0x194))['value'])[_0x14dcf4(0x1a3)](()=>{var _0xaaa720=_0x14dcf4;username=document['getElementById'](_0xaaa720(0x194))[_0xaaa720(0x1ad)],document[_0xaaa720(0x181)](_0xaaa720(0x178))[_0xaaa720(0x19a)][_0xaaa720(0x180)]='block',generateRandomQuestion();});});function addQuestion(_0x5f4d20){var _0x4f2bf5=_0x127a30,_0x4c91de=_0x5f4d20,_0x116f9b=0x64,_0x1b6e98=0x0;document[_0x4f2bf5(0x181)](_0x4f2bf5(0x193))[_0x4f2bf5(0x175)]='';function _0x490bd6(){var _0x38f722=_0x4f2bf5;_0x1b6e98<_0x4c91de['length']&&(document[_0x38f722(0x181)]('question')[_0x38f722(0x175)]+=_0x4c91de[_0x38f722(0x1a8)](_0x1b6e98),_0x1b6e98++,setTimeout(_0x490bd6,_0x116f9b));}_0x490bd6();}function generateRandomQuestion(){var _0x4cf2a1=_0x127a30;loadLeaderboard(),document[_0x4cf2a1(0x181)](_0x4cf2a1(0x1a6))[_0x4cf2a1(0x175)]=_0x4cf2a1(0x1a7)+score+'/'+tries;var _0x48337e=Math[_0x4cf2a1(0x185)](Math[_0x4cf2a1(0x1ae)]()*0x3);if(_0x48337e==0x0){var _0x2eb514=Math[_0x4cf2a1(0x185)](Math[_0x4cf2a1(0x1ae)]()*0x64),_0x535edc=Math[_0x4cf2a1(0x185)](Math[_0x4cf2a1(0x1ae)]()*0x64);addQuestion(_0x2eb514+_0x4cf2a1(0x1a2)+_0x535edc);}else{if(_0x48337e==0x1){var _0x2eb514=Math[_0x4cf2a1(0x185)](Math['random']()*0x64),_0x535edc=Math[_0x4cf2a1(0x185)](Math[_0x4cf2a1(0x1ae)]()*0x64);if(_0x2eb514<_0x535edc){var _0x52bfe5=_0x2eb514;_0x2eb514=_0x535edc,_0x535edc=_0x52bfe5;}addQuestion(_0x2eb514+_0x4cf2a1(0x19e)+_0x535edc);}else{if(_0x48337e==0x2){var _0x2eb514=Math[_0x4cf2a1(0x185)](Math[_0x4cf2a1(0x1ae)]()*0xa),_0x535edc=Math[_0x4cf2a1(0x185)](Math['random']()*0xa);addQuestion(_0x2eb514+'\x20*\x20'+_0x535edc);}}}var _0x1fc40a=Math['floor'](Math['random']()*0x4),_0x438bf5=[];for(let _0x3328e9=0x0;_0x3328e9<0x4;_0x3328e9++){if(_0x3328e9==_0x1fc40a){if(_0x48337e==0x0)_0x438bf5[_0x4cf2a1(0x191)](_0x2eb514+_0x535edc),correctAnswer=_0x2eb514+_0x535edc;else{if(_0x48337e==0x1){if(_0x2eb514<_0x535edc){var _0x52bfe5=_0x2eb514;_0x2eb514=_0x535edc,_0x535edc=_0x52bfe5;}_0x438bf5[_0x4cf2a1(0x191)](_0x2eb514-_0x535edc),correctAnswer=_0x2eb514-_0x535edc;}else _0x48337e==0x2&&(_0x438bf5[_0x4cf2a1(0x191)](_0x2eb514*_0x535edc),correctAnswer=_0x2eb514*_0x535edc);}}else{var _0x34f9dc;if(_0x48337e==0x0)_0x34f9dc=Math['floor'](Math[_0x4cf2a1(0x1ae)]()*0xc8);else{if(_0x48337e==0x1)_0x34f9dc=Math[_0x4cf2a1(0x185)](Math[_0x4cf2a1(0x1ae)]()*0x64);else _0x48337e==0x2&&(_0x34f9dc=Math[_0x4cf2a1(0x185)](Math['random']()*0x64));}_0x438bf5[_0x4cf2a1(0x191)](_0x34f9dc);}}var _0x251744=0x0;for(let _0x516b22 of _0x438bf5){document[_0x4cf2a1(0x181)](_0x4cf2a1(0x190)+(_0x251744+0x1))['textContent']=_0x516b22,_0x251744++;}}document[_0x127a30(0x181)](_0x127a30(0x176))[_0x127a30(0x19d)](_0x127a30(0x1a1),function(){var _0x4882b6=_0x127a30;document['getElementById'](_0x4882b6(0x176))[_0x4882b6(0x1a4)]==String(correctAnswer)&&(alert('Correct'),score+=0x1),tries+=0x1,saveData(username,score,tries),generateRandomQuestion();}),document[_0x127a30(0x181)](_0x127a30(0x184))[_0x127a30(0x19d)](_0x127a30(0x1a1),function(){var _0x1fd94f=_0x127a30;document['getElementById'](_0x1fd94f(0x184))['textContent']==String(correctAnswer)&&(alert(_0x1fd94f(0x198)),score+=0x1),tries+=0x1,saveData(username,score,tries),generateRandomQuestion();}),document[_0x127a30(0x181)](_0x127a30(0x1ab))['addEventListener']('click',function(){var _0x410300=_0x127a30;document['getElementById'](_0x410300(0x1ab))[_0x410300(0x1a4)]==String(correctAnswer)&&(alert(_0x410300(0x198)),score+=0x1),tries+=0x1,saveData(username,score,tries),generateRandomQuestion();}),document[_0x127a30(0x181)]('option4')['addEventListener']('click',function(){var _0x3684d2=_0x127a30;document[_0x3684d2(0x181)](_0x3684d2(0x186))[_0x3684d2(0x1a4)]==correctAnswer&&(alert(_0x3684d2(0x198)),score+=0x1),tries+=0x1,generateRandomQuestion();});