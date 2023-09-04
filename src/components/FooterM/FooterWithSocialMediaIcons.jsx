import React from 'react'
import 'flowbite-react'


import { Button, Footer } from 'flowbite-react';
import {   BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsReddit, BsTelegram, BsTwitter } from 'react-icons/bs';
// import { ButtonBase } from 'flowbite-react/lib/esm/components/Button/ButtonBase';
import InputElementWithIconOnTheLeftSide from '../../usedComponents/InputElementWithIconOnTheLeftSide';


export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className='bg-violet-100'>
      <div className="w-full bg-violet-100">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Flowbite Logo"
              href="#"
              name="What Y Use"
              src="./Untitled_logo_3_free-file.jpg"
            />
          </div>
          <div className='flex flex-col gap-3'>
          <h2>Подпишись что бы получать оповещение о новых выпусках продукта
                  и предложениях</h2>
            <InputElementWithIconOnTheLeftSide/>
            <Button className="w-32">Подписаться</Button>
            </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Информация" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                Условия
                </Footer.Link>
                <Footer.Link href="#">
                Соцподдержка
                </Footer.Link>
                <Footer.Link href="#">
                Магазин Скидок
                </Footer.Link>
                <Footer.Link href="#">
                 Ярмарка
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Связь с нами" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                Вопросы и Ответы
                </Footer.Link>
                <Footer.Link href="#">
                Руководство по сайту
                </Footer.Link>
                <Footer.Link href="#">
                Обмен или Возврат
                </Footer.Link>
                <Footer.Link href="#">
                Вакансии
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title=" Права и лицензия" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                 Лицензия
                </Footer.Link>
                <Footer.Link href="#">
                  Основные понятия
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="What YOU Use™ - Все права соблюдаются"
            href="#"
            year={2023}
          />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="#"
              icon={BsGoogle}
            />
            <Footer.Icon
              href="#"
              icon={BsReddit}
            />
            <Footer.Icon
              href="#"
              icon={BsTelegram}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}



 

