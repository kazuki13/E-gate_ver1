
import '../scc/heder.css';
import '../scc/view.css'


function App() {
  return (
<div >
    <header class="header">
      <div class="header__inner">
          <h1 class="header__title header-title">
            <a href="#">
              E-gate
            </a>
          </h1>
      </div>

      <div class="hamburger-menu">
          
          <input type="checkbox" id="menu-btn-check"></input>
          <label for="menu-btn-check" class="menu-btn"><span></span></label>
          {/* ここからメニュー */}
          <div class="menu-content">
            <ul>
            <li>
                <a href="/">ホーム</a>
              </li>
              <li>
                <a href="/2">登録</a>
              </li>
              <li>
                <a href="/3">出席</a>
              </li>
              <li>
                <a href="/4">出席一覧</a>
              </li>
            </ul>
          </div>
      </div>
    </header>
    <main>
     <a href="./3" class="btn btn-border"><span>ss</span></a>
     <a href="./3" class="btn btn-border2"><span>ss</span></a>
    </main>
    <footer class="footer">
      <div>
        フッターエリア
      </div>
    </footer>
  </div>
  );
}

export default App;
