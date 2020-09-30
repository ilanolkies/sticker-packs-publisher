import React from 'react'
import plus from '../../icons/plus.svg'
import { DashedBox } from '../'
import './style.scss'

type NewStickerPackDashboardProps = { goToNewStickerPackPage: () => void }

export default ({ goToNewStickerPackPage }: NewStickerPackDashboardProps) => <div className="dashborad-new-sticker-pack">
  <DashedBox onClick={goToNewStickerPackPage}>
    <img src={plus} />
    <p>new sitcker pack</p>
  </DashedBox>
</div>
