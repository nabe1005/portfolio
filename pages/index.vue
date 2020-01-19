<template lang="pug">
  .content
    section.is-dark.hero#top
      .hero-body
        .container
          h1.title.is-1 Nabe's Portfolio
          h4.subtitle.is-4 ぽーとふぉりお
    section.is-light.hero#about
      .hero-body
        .container.mb
          h2.title.has-text-left.is-2
            font-awesome-icon(:icon="['fas','address-card']")
            |   About me
          h4.subtitle.has-text-left.is-4 簡単な自己紹介
        .container
          .columns
            .column.is-3
              h4.title.is-4.has-text-left 名前
              h4.subtitle.is-5.has-text-left 渡部泰生
            .column.is-3
              h4.title.is-4.has-text-left 生年月日
              h4.subtitle.is-5.has-text-left 2000/11/13
            .column
              h4.title.is-4.has-text-left 所属
              h4.subtitle.is-5.has-text-left 函館工業高等専門学校ー生産システム工学科
    section.is-dark.hero#contact
      .hero-body
        .container.mb
          h2.title.has-text-left.is-2
            font-awesome-icon(:icon="['fas', 'address-book']")
            |   Contact Information
          h4.subtitle.has-text-left.is-4 連絡先
        .container
          .columns.is-fluid
            .column.is-3
              h4.title.is-4.has-text-left
                font-awesome-icon(:icon="['fab', 'twitter-square']")
                |   Twitter
              h4.subtitle.is-5.has-text-left @taiki_1113_<br>
                a.button(href="https://twitter.com/taiki_1113_" target="_blank") Twitter
            .column.is-3
              h4.title.is-4.has-text-left
                font-awesome-icon(:icon="['fab', 'facebook']")
                |   Facebook
              h4.subtitle.is-5.has-text-left Watanabe Taiki<br>
                a.button(href="https://www.facebook.com/taiki.watanabe.75873" target="_blank") Facebook
            .column
              h4.title.is-4.has-text-left
                font-awesome-icon(:icon="['fas', 'envelope']")
                |   E-Mail
              h4.subtitle.is-5.has-text-left taiki.w.1113☆gmail.com(☆→@)
    section.is-light.hero#skills
      .hero-body
        .container.mb
          h2.title.has-text-left.is-2
            font-awesome-icon(:icon="['fas','lightbulb']")
            |   Skills
          h4.subtitle.has-text-left.is-4 できること
        .container
          .columns.is-fluid
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fab','html5']")
              h4.title.is-4 HTML
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fab','css3-alt']")
              h4.title.is-4 CSS
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fab','vuejs']")
              h4.title.is-4 Vue.js
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fab','python']")
              h4.title.is-4 python
          .columns
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fab','php']")
              h4.title.is-4 PHP
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fab','docker']")
              h4.title.is-4 Docker
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fas','server']")
              h4.title.is-4 Go
            .column.is-3.has-text-centered
              font-awesome-icon.sicon(:icon="['fab','adobe']")
              h4.title.is-4 Illustrator etc...
    section.is-dark.hero#history
      .hero-body
        .container.mb
          h2.title.has-text-left.is-2
            font-awesome-icon(icon="history")
            |   History
          h4.subtitle.has-text-left.is-4 できたこと
        .container.mb.has-text-centered
          a.button(v-on:click="changeYear('2016')" :class="{'is-success' : year === '2016'}") 2016
          a.button(v-on:click="changeYear('2017')" :class="{'is-success' : year === '2017'}") 2017
          a.button(v-on:click="changeYear('2018')" :class="{'is-success' : year === '2018'}") 2018
          a.button(v-on:click="changeYear('2019')" :class="{'is-success' : year === '2019'}") 2019
        .container.is-centered(v-if="year === '2016'")
          ul.timeline
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail April 6, 2016
                h4.title.is-5 函館工業高等専門学校 入学
                a.button(href="https://www.hakodate-ct.ac.jp" target="_blank") 公式サイト
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail October 15, 2016
                h4.title.is-5 KOSENアイディアソン@秋田 参加
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail October 29, 2016
                h4.title.is-5 第1回はこだて学生政策アイデアコンテスト 参加
                a.button(href="http://2016.hakodate-ideacontest.com/" target="_blank") コンテスト概要
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail November 18, 2016
                h4.title.is-5 第19回全国中学高校Webコンテスト 参加
                a.button(href="http://webcon.japias.jp/19tqj/rules.html" target="_blank") コンテスト概要
            li.timeline-event
              label.timeline-event-icon
        .container.is-centered(v-if="year === '2017'")
          ul.timeline
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail January 6-7, 2017
                h4.title.is-5 KOSENアイディアソン@函館 参加
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail November 10-12, 2017
                h4.title.is-5 KOSENハッカソン＠函館 参加
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail November 21, 2017
                h4.title.is-5 第20回全国中学高校webコンテスト 参加
                h5.subtitle.is-6 TOP50 高校生の部 200166X 巨大災害への備え
                a.button(href="http://webcon.japias.jp/20tqj-judgeresult1.html" target="_blank") コンテスト結果
            li.timeline-event
              label.timeline-event-icon
        .container.is-centered(v-if="year === '2018'")
          ul.timeline
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail February 12, 2018
                h4.title.is-5 Hack U 函館 2018 参加
                a.button(href="https://hacku.yahoo.co.jp/hakodate2018/" target="_blank") イベント詳細
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail April 19, 2018
                h4.title.is-5 MIRAI BASE春のLT大会 参加
                a.button(href="https://asoviva.connpass.com/event/83246/" target="_blank") イベント詳細
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail August 29-31, 2018
                h4.title.is-5 5G×GPUコンピューティングを活用したハッカソン 参加
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail September 2, 2018
                h4.title.is-5 開港5都市景観まちづくり会議 2018 函館大会 参加
                h5.subtitle.is-6 分科会Dー西部地区の過去から未来を展望する　学生プレゼンター
                a.button(href="https://www.hakobura.jp/news04/2018/08/5-1.html" target="_blank") イベント詳細
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail September 15-17, 2018
                h4.title.is-5 STARTUP BASE U18 in 奥尻島 参加
                a.button(href="http://startupbase-u18.com/okushiri/" target="_blank") イベント詳細
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail October 14, 2018
                h4.title.is-5 第1回高専キャリア全国大会 参加
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail November 10, 2018
                h4.title.is-5 第3回はこだて学生政策アイデアコンテスト2018 参加
                h5.subtitle.is-6 優秀政策アイデア賞 高校生の部 奥尻高校×函館高専×札幌開成 合同チーム
                a.button(href="http://hakodate-ideacontest.com/" target="_blank") コンテスト結果
                a.button(href="https://speakerdeck.com/nabe1005/181110-hakodatexue-sheng-zheng-ce-aideakontesuto" target="_blank") 発表スライド
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail December 15, 2018
                h4.title.is-5 KOSENハッカソン2018 参加
            li.timeline-event
              label.timeline-event-icon
        .container.is-centered(v-if="year === '2019'")
          ul.timeline
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail January 5, 2019
                h4.title.is-5 第2回高専キャリア全国大会 参加
                a.button(href="https://note.mu/nabe1005/n/n249af9804f9f" target="_blank") 参加記
                a.button(href="https://speakerdeck.com/nabe1005/190105-nabe-kosen-career" target="_blank") 発表スライド
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail February 16, 2019
                h4.title.is-5 第21回全国中学高校webコンテスト 参加
                h5.subtitle.is-6 高校生の部 ファイナリスト銀賞 210337W 英語のミステリーxヒストリー
                a.button(href="http://webcon.japias.jp/page-library.html" target="_blank") コンテスト結果
                a.button(href="http://en-mysteryhistory.jp/" target="_blank") 製作サイト
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail April 24, 2019
                h4.title.is-5 湯川寺LT 開催
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail July 14, 2019
                h4.title.is-5 高専カンファレンスNonIT 参加
                a.button(href="http://kosenconf.jp/?132NonIT" target="_blank") イベント詳細
                a.button(href="https://note.mu/nabe1005/n/n356cfadff676" target="_blank") 参加記
                a.button(href="https://speakerdeck.com/nabe1005/190714-gao-zhuan-kanhuarensunonit" target="_blank") 発表スライド
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail August 19 - September 7, 2019
                h4.title.is-5 株式会社jig.jp インターンシップ 参加
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail September 9, 2019
                h4.title.is-5 高専カンファレンス明石3 参加
                a.button(href="http://kosenconf.jp/?138akashi" target="_blank") イベント詳細
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail September 21-22, 2019
                h4.title.is-5 第4回高専キャリア全国大会 参加
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail October 9-10, 2019
                h4.title.is-5 はこだてハッカソン 参加
                a.button(href="https://mashupawards.connpass.com/event/147118/" target="_blank") イベント詳細
            li.timeline-event
              label.timeline-event-icon
              .timeline-event-copy
                p.timeline-event-thumbnail November 8, 2019
                h4.title.is-5 4th STI-Gigaku 2019 参加
                h5.subtitle.is-6 Best Poster Award 受賞
                h5.subtitle.is-6 函館高専HPに掲載されました！
                a.button(href="https://www.hakodate-ct.ac.jp/collegelife/18990.html" target="_blank") 該当ページ
            li.timeline-event
              label.timeline-event-icon
</template>

<script>
  export default {
    data() {
      return {
        year: '2019'
      }
    },
    methods: {
      changeYear: function (year) {
        this.year = year
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mb {
    margin-bottom: 30px;
  }

  .sicon {
    font-size: 70px;
  }

  .is-center {
    margin: auto;
  }

  .timeline-event-copy {
    text-align: left;
  }

  .timeline {
    margin: 0 auto;
  }

  .tabs ul {
    min-height: 45px;
  }

  a {
    margin-right: 5px;
  }
</style>

