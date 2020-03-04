import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const name = 'now';
    let value = 3;
    return (
      <Fragment>
        <h1>안녕하세요 리액트</h1>
        <p>
          <table>
            <tr>
              <th>number</th>
              <th>name</th>
              <th>content</th>
            </tr>
            <tr>
              <td>100</td>
              <td>홍길동</td>
              <td>소설</td>
            </tr>
          </table>
          <form action="" method="get">
            <input type="color" />
            <button>button</button>
          </form>
        </p>
        <footer>
          <p>{1 + 1 == 3 ? '감자' : '고구마'}</p>
          <p>{name == 'now' && <div>success</div>}</p>
          {(() => {
            if (value == 1) {
              return '1번';
            } else if (value == 2) {
              return '22';
            } else if (value == 3) {
              return '333';
            }
          })()}
        </footer>
      </Fragment>
    );
  }
}

export default App;
