// Search는 좀더 까다롭다 interactivity(상호작용)이 필요하다

//컨테이너 컴포넌트
//API 추가전에 method도 없는 dumb
import { moviesApi, tvApi } from 'api';
import React  from 'react';
import SearchPresenter from "./SearchPresenter";


//홈컨테이너는 상태 값을 가진다
export default class extends React.Component{
//상태 값은 3가지
state = {
  //state들을 결정했다

  //누군가 검색을 시도했을때 양쪽영화 티비 결과를 둘다 보여주려고 하기 때문에
movieResults: null,
tvResults:null,

//searchTerm은 empty고 검색하고 엔터 누르면 로딩이 true가 되고 그 결과값을 여기다 넣는다
searchTerm:" asdsad", // 디폴트 인풋은 이 value 값을가진다
loading:false,
error:null
};
//첫번째 로직 handleSubmit : 누군가 폼에서 text를 입력하고 엔터를 누르면 그게 handleSubmit가 된다.
//handleSubmit 은 searchTerm 이 빈칸 (공백) 아니널 체크하고 그 다음에 search 함수를 실행한다.

handleSubmit = () => {
 const  {searchTerm} = this.state;

 //searTerm이 빈문자열이 아니라면
 if( searchTerm !== ""){
   //searchTerm 이 공백이 아닐때 searchTerm을 인자로 넣고 searchByTerm을 호출한다]
   this.searchByTerm()
 }
};


 
// 이 함수는 term 인자를 받고
//누군가 검색을 했을때 로딩을 true로 만들꺼다. 디폴트 로딩은 false 이기 때문이다
searchByTerm = async() =>{

 const  {searchTerm} = this.state;
 try{
const{
  data : {reslts :movieResults}
 } = await moviesApi.search(searchTerm) ;

const {
  data : {reslts :tvResults}
  }  =await tvApi.search(searchTerm);

this.setState({
  movieResults,
  tvResults
});
 }catch{
this.setState({error :"Can't find results."})
 }finally{
   this.setState({loading : false});
 }
}

// 이곳에 모든 로직을 추가 (api 가져오고  eroor 처리하는 모든것들)

//여기 HomePresenter로 가는 모든 스테이트 값을 렌더링
render(){
  //object destructuring(객체 비구조 할당 )사용
 const {movieResults,tvResults, searchTerm,loading,error}=this.state;
  return <SearchPresenter
        searchTerm ={searchTerm}
        tvResults={tvResults}
         searchTerm={searchTerm}
       loading={loading}
       error={error}
      //handleSubmit 함수를 SearchPresenter에다가 보내야한다
      //누군가 폼을 제출할때 handleSubmit 을 호출
       handleSubmit ={this.handleSubmit}

  />
  //searchPresenter 에서 폼을 만들고 폼 셋업하고 onSubmit을 호출한다
  //this.handleSubmit을 호출하기 위해
  //handleSubmit은 searchByTerm을 호출하고 searchByTerm이 모든걸 작업들을 준비한다
}

}

