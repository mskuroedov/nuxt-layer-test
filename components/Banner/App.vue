<template>
  <div class="mobile-apps">
    <div class="logo-apps">
      <img
        src="/mobile-apps/logo-apps.svg"
        width="244"
        height="320"
        alt=""
      >
    </div>
    <div class="content">
      <div class="title">
        <div class="title__text">
          Штрафы ГИБДД - проверка и оплата
        </div>
        <span>Приложение</span>
      </div>
      <ul>
        <li>Погашение за 5 минут</li>
        <li>Проверка и оплата со скидкой 50% без регистрации</li>
        <li>Уведомления о новых штрафах</li>
        <li>Чеки всегда под рукой</li>
      </ul>
      <div class="links">
        <a
          :href="google"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/mobile-apps/google-play.png"
            width="136"
            height="40"
            alt="GooglePlay"
          >
        </a>
        <a
          :href="apple"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/mobile-apps/app-store.png"
            width="120"
            height="40"
            alt="AppStore"
          >
        </a>
      </div>
    </div>
    <div class="qr">
      <img
        src="/mobile-apps/qr-paygibdd.svg"
        width="200"
        height="200"
        alt=""
      >
      <span>Наведите камеру или сканер QR-кодов</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const google: string = 'https://play.google.com/store/apps/details?id=com.simplepayments_gibdd'
const apple: string = 'https://apps.apple.com/ru/app/%D1%88%D1%82%D1%80%D0%B0%D1%84%D1%8B-%D0%B3%D0%B8%D0%B1%D0%B4%D0%B4-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B0/id1475500802'
</script>

<style lang="scss" scoped>
.mobile-apps {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  background: linear-gradient(18.65deg, #204E7A -16.75%, #3B99F3 114.62%);
  border-radius: 8px;
  color: #fff;
  font-family: Arial, serif;
  min-height: 311px;

  .content {
    margin: 20px 0;

    .title__text {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }

    span {
      padding-top: -10px;
      font-size: 14px;
      opacity: 0.6;
    }

    ul {
      margin-top: 22px;
      margin-bottom: 8px;
      padding-left: 34px;
      font-size: 16px;
      line-height: 18px;

      li {
        max-width: 290px;
        position: relative;
        list-style-type: none;
        padding-bottom: 15px;

        &::before {
          content: '';
          position: absolute;
          width: 19px;
          height: 4px;
          top: 6px;
          left: -34px;
          background: #7CA1FF;
          border-top-right-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }
    }
  }

  .logo-apps {
    flex-basis: 22%;

    img {
      height: 100%;
    }
  }

  .app-view {
    position: relative;
    width: 250px;
    min-height: 311px;
    display: flex;
    justify-content: flex-end;

    &::before {
      content: '';
      position: absolute;
      top: 35px;
      left: 15px;
      width: 200px;
      height: 275px;
      box-shadow: 0 15px 100px rgba(0, 0, 0, 0.2);
      z-index: 0;
    }

    img {
      z-index: 1;
      margin-top: 20px;
      margin-right: 20px;
    }
  }

  .qr {
    margin-right: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      z-index: 1;
      @media (max-width: 767px) {
        display: none;
      }
    }

    span {
      text-align: center;
      line-height: 17px;
      margin-top: 24px;
      font-size: 14px;
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
}

.links {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 40px;
    width: auto;
  }

  a:first-child {
    margin-right: 35px;
  }
}

@media (max-width: 1200px) {
  .logo-apps {
    flex-basis: auto;
  }
}

@media (max-width: 991px) {
  .mobile-apps {
    .logo-apps {
      display: none;
    }

    .content {
      margin-left: 35px;

      .title {
        position: relative;
        padding-left: 77px;

        &::before {
          content: '';
          position: absolute;
          display: block;
          width: 60px;
          height: 72px;
          top: 0;
          left: 0;
          background-image: url(/mobile-apps/logo-small.svg);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .mobile-apps {
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(59.91deg, #204E7A -16.75%, #3B99F3 114.62%);

    .content {
      margin-left: 0;

      .title {
        max-width: 380px;
      }

      ul {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      .links {
        justify-content: center;

        img {
          height: 40px;
          width: auto;
        }
      }
    }

    .app-view {
      justify-content: center;
      margin-bottom: -75px;

      img {
        margin-top: 25px;
        margin-right: 0;

        &::before {
          top: 60px;
          left: 25px;
          width: 200px;
          height: 275px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .mobile-apps {
    padding: 0 16px;
    border-radius: 0;

    .links {
      a:first-child {
        margin-right: 15px;
      }
    }
  }
}
</style>

<style lang='scss'>
.container-banner {
  padding-bottom: 40px;
}

@media (max-width: 480px) {
  .container-banner {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
