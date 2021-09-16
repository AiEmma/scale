import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { CardContainer, CardConte } from './styled'

const Card = (props) => {

  return (
    <CardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'30%'}
          image={props.avatar}
          title={props.first_name}
         
        />
        <CardConte>
          <Typography align={'center'}>
            {props.first_name}
          </Typography>
        </CardConte>
          <Typography align={'center'} variant="body2" color="text.secondary">
              <p>{props.email}</p>
          </Typography>
      </CardActionArea>
    </CardContainer>
  )
}

export default Card