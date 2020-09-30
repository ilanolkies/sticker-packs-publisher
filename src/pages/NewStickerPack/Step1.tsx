import React, { useState } from 'react'
import sticker_1 from '../../icons/sticker_1.svg'
import { TextInput, Select } from '../../components'
import Grid from '@material-ui/core/Grid'
import { validateOnChange, notEmpty, geThanZero } from '../../lib'

export default () => {
  const [artistName, setArtistName] = useState('')
  const [artistNameHasError, setArtistNameHasError] = useState(false)

  const [packName, setPackName] = useState('')
  const [packNameHasError, setPackNameHasError] = useState(false)

  const [category, setCategory] = useState('')
  const [categoryHasError, setCategoryHasError] = useState(false)

  const [receiver, setReceiver] = useState('')
  const [receiverHasError, setReceiverHasError] = useState(false)

  const [limit, setLimit] = useState('')
  const [limitHasError, setLimitHasError] = useState(false)

  const [packPrice, setPackPrice] = useState('')
  const [packPriceHasError, setPackPriceHasError] = useState(false)

  const [networkFee, setNetworkFee] = useState('')
  const [networkFeeHasError, setNetworkFeeHasError] = useState(false)

  return (
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header"><h3><img src={sticker_1} /> Metadata</h3></div>
      <div className="new-sticker-pack-section-body">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextInput label="Artist name" value={artistName} error={artistNameHasError} onChange={validateOnChange({
              validate: notEmpty,
              setValue: setArtistName,
              setHasError: setArtistNameHasError
            })} />
          </Grid>
          <Grid item xs={4}>
            <TextInput label="Name your sticker pack" value={packName} error={packNameHasError} onChange={validateOnChange({
              validate: notEmpty,
              setValue: setPackName,
              setHasError: setPackNameHasError
            })} />
          </Grid>
          <Grid item xs={4}>
            <Select label="Select category" value={category} error={categoryHasError} onChange={validateOnChange({
              validate: notEmpty,
              setValue: setCategory,
              setHasError: setCategoryHasError
            })}>
              <option disabled value=""></option>
              <option value="0x00000000">Cartoon</option>
              <option value="0x00000001">Pets</option>
            </Select>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextInput label="Ethereum address or ENS domain to receive SNT" value={receiver} error={receiverHasError} onChange={validateOnChange({
              validate: notEmpty, // TODO: validate address or domain
              setValue: setReceiver,
              setHasError: setReceiverHasError
            })} />
          </Grid>
          <Grid item xs={6}>
            <Select label="Select Limit installs of sticker pack"  value={limit} error={limitHasError} onChange={validateOnChange({
              validate: notEmpty,
              setValue: setLimit,
              setHasError: setLimitHasError
            })}>
              <option value="0">Unlimited</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextInput label="Pack price" value={packPrice} error={packPriceHasError} onChange={validateOnChange({
              validate: geThanZero,
              setValue: setPackPrice,
              setHasError: setPackPriceHasError
            })} />
          </Grid>
          <Grid item xs={6}>
            <Select label="Contribution to Status Network from sales" value={networkFee} error={networkFeeHasError} onChange={validateOnChange({
              validate: geThanZero,
              setValue: setNetworkFee,
              setHasError: setNetworkFeeHasError
            })}>
              <option value="0">0%</option>
              <option value="10">10%</option>
              <option value="25">25%</option>
              <option value="50">50%</option>
            </Select>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
