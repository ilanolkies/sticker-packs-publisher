import React from 'react'
import plus from '../icons/plus.svg'

type NewStickerPackDashboardProps = { goToNewStickerPackPage: () => void }

export default ({ goToNewStickerPackPage }: NewStickerPackDashboardProps) => <div className="dashborad-new-sticker-pack">
    <div className="dashborad-new-sticker-pack-border" onClick={goToNewStickerPackPage}>
      <div className="dashborad-new-sticker-pack-container">
        <div className="dashborad-new-sticker-pack-content">
          <img src={plus} />
          <p>new sitcker pack</p>
        </div>
    </div>
  </div>
</div>
