import React from 'react'
import './style.scss'
import sticker_1 from '../../icons/sticker_1.svg'
import sticker_2 from '../../icons/sticker_2.svg'
import sticker_3 from '../../icons/sticker_3.svg'
import sticker_4 from '../../icons/sticker_4.svg'
import { TextInput, Select } from '../../components'
import Grid from '@material-ui/core/Grid'

export default () => <div className="new-sticker-pack-page">
  <div className="new-sticker-pack-page-container">
    <h2>New sticker pack</h2>
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header"><h3><img src={sticker_1} /> Metadata</h3></div>
      <div className="new-sticker-pack-section-body">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextInput label="Artist name" />
          </Grid>
          <Grid item xs={4}>
            <TextInput label="Name your sticker pack" />
          </Grid>
          <Grid item xs={4}>
            <Select label="Select category" onChange={() => {}}>
              <option>Cartoon</option>
            </Select>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextInput label="Ethereum address or ENS domain to receive SNT" />
          </Grid>
          <Grid item xs={6}>
            <Select label="Select Limit installs of sticker pack" onChange={() => {}}>
              <option selected value="0">Unlimited</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextInput label="Pack price" />
          </Grid>
          <Grid item xs={6}>
            <Select label="Contribution to Status Network from sales" onChange={() => {}}>
              <option selected value="0">0%</option>
              <option value="10">10%</option>
              <option value="25">25%</option>
              <option value="50">50%</option>
            </Select>
          </Grid>
        </Grid>
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
