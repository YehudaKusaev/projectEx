import React from "react";

export default function Footer() {
  return (
    <div className="md:container md:mx-auto">
      <div className="footer ">
        <div className="threeRaw grid grid-flow-row auto-rows-max md:auto-rows-min">
          <div className="fRaw grid grid-cols-3 gap-3 ">
            <div className="fColomn">
              <div className="contHeader">Клиентская служба</div>
              <div className="contList">
                <ul>
                  <li>Доставка</li>
                  <li>Связь с нами</li>
                  <li>Вопросы и Ответы</li>
                  <li>Руководство по сайту</li>
                  <li>Обмен или Возврат</li>
                  <li>Международная служба</li>
                </ul>
              </div>
            </div>
            <div className="sColomn">
              <div className="contHeaderTwo">
                <h2>Информация</h2>
              </div>
              <div className="contListTwo">
                <ul>
                  <li>условия</li>
                  <li>соцподдержка</li>
                  <li>магазин скидок</li>
                  <li>лицензия</li>
                  <li>вакансии</li>
                </ul>
              </div>
            </div>
            <div className="tColomn">
              <div className="contHeaderThree">
                <h1>Оповещение</h1>
              </div>
              <div className="contListThree">
                <p>
                  Подпишись что бы получать оповещение о новых выпусках продукта
                  и предложениях
                </p>
              </div>
              <div className="contListTForm">
                <form>
                  <div>
                    <input type="email"></input>
                  </div>
                  <div>
                    <button type="submit">submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sRaw"></div>
        <div className="tRaw"></div>
      </div>
    </div>
  );
}
