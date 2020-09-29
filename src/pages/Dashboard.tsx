import React from 'react'
import { NewStickerPackDashboard } from '../components'

type DashboardProps = { goToNewStickerPackPage: () => void }

export default ({ goToNewStickerPackPage }: DashboardProps) => <div className="dashboard">
  <div className="dashboard-container">
    <NewStickerPackDashboard goToNewStickerPackPage={goToNewStickerPackPage} />
  </div>
</div>
