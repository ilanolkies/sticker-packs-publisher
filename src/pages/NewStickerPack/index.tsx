import React from 'react'
import './style.scss'
import sticker_1 from '../../icons/sticker_1.svg'
import sticker_2 from '../../icons/sticker_2.svg'
import sticker_3 from '../../icons/sticker_3.svg'
import sticker_4 from '../../icons/sticker_4.svg'

export default () => <div className="new-sticker-pack-page">
  <div className="new-sticker-pack-page-container">
    <h2>New sticker pack</h2>
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header"><h3><img src={sticker_1} /> Metadata</h3></div>
      <div className="new-sticker-pack-section-body">
        Your artist name | Name your sticker pack | Select category
        <hr />
        Ethereum address or ENS domain to receive SNT | Limit installs of sticker pack<br />
        Pack price | Contribution to Status Network from sales
      </div>
    </div>
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header"><h3><img src={sticker_2} /> Stickers</h3></div>
      <div className="new-sticker-pack-section-body"></div>
    </div>
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header">
        <h3><img src={sticker_3} /> Sticker Market Banner</h3>
      </div>
      <div className="new-sticker-pack-section-body"></div>
    </div>
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header">
        <h3><img src={sticker_4} /> Stickers Pack Thumbnail</h3>
      </div>
      <div className="new-sticker-pack-section-body"></div>
    </div>
  </div>
</div>
