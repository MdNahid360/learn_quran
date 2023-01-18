import React from 'react';
import { Link } from 'react-router-dom';
import Sura from '../Sura/Sura';

const SaveItem = (props) => {
    const {id,name_arabic,name_complex, chapter_number, verses_count, revelation_place, chapter_id} = props.save;
    console.log(props.save);
    return (
        <div>
            <Link to={`/${id}`}>            
                <Sura chapters={props.save}></Sura>
            </Link>
        </div>
    );
};

export default SaveItem;