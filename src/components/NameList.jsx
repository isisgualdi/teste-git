import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core//Box';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



function NameList(props) {
    const [novoNome, setNovoNome] = useState('')
    const nomes = Store.getState().nomes.data // Pega os nomes do store

    return ( 
        <Box>
            <Grid container justifyContent='center'>
                <Grid item xs={6}>
                <Typography component="h1" variant="h4">
                 Lista de nomes
            </Typography>

            <List>
                {nomes.map((item)=>
                    <ListItem key={item}>
                        {item}
                    </ListItem>
                    
                )}
            </List>

            <TextField id="standard-basic" size="small" label="Digite aqui"  onChange={(e)=> setNovoNome(e.target.value)}/>
            
           
            <ButtonGroup>
                <Button size="small" variant="contained" color="primary" onClick={()=> Store.dispatch({
                    type: 'ADD_NAME',
                    name: novoNome
                })}>
                    Adicionar nome
                </Button>

                <Button 
                    startIcon={<DeleteIcon />}
                    size='small' 
                    variant='contained' 
                    color='secundary'
                    onClick={()=> Store.dispatch({
                    type: 'REMOVE_NAME',
                    name: novoNome
                })}>
                    Remover
                </Button>
                
            </ButtonGroup>
            </Grid>
            
                </Grid>
            
        </Box> 
        
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.nomes.data,
    };
};

export default connect(mapStateToProps)(NameList);