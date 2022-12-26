import React, { FormEventHandler, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { getPokemon } from '../Services/api';
import { BasicPokemonData } from '../Utils/formIterfaces';

const CustomForm = () => {
    const [pokemon, setPokemon] = useState<BasicPokemonData | null>(null);
    const [formValue, setFormValue] = useState<string>("");
    const handelOnSubmit = async(event: Event | any) => {
        event.preventDefault();
        console.log(formValue.toLocaleLowerCase());
        if(formValue !== ""){
            let pokemon: BasicPokemonData = await getPokemon(formValue.toLocaleLowerCase());
            setPokemon(pokemon);
        }
    }
  return (
    <Stack direction="vertical" className="col-md-2 mx-auto my-5" gap={5}>
        <Form onSubmit={(e: Event | any)=>handelOnSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Pokemon Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter a valid Pokemon name" value={formValue} onChange={event => setFormValue(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Search
            </Button>
        </Form>
        {pokemon ? 
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={pokemon.sprites.front_default} />
                        <Card.Body>
                            <Card.Title>{pokemon.name}</Card.Title>
                            <Card.Text>
                                {pokemon.species.color}
                            </Card.Text>
                            <Button variant="primary">Mas informacion</Button>
                        </Card.Body>
                    </Card>
                :
                    <></>
        }
        
    </Stack>
  );
}

export default CustomForm;