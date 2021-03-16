import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null, //show를 찾을 때 id를 갖고 가잖아 그 작업들ㅇ ㅣ끝나면 id를 가져와서 그걸로검색해서 결과(result)를 가져온다
    error: null,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}