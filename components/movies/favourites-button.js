'use client';

import {addToLibrary} from "@/actions/movie-actions";
import {useActionState} from "react";

export default function FavouritesButton({movie, isFavourite}) {
    const addMovieToLibrary = addToLibrary.bind(null, movie);
    const [state, formAction, isPending] = useActionState(addMovieToLibrary, {});

    return (<>
        <form action={formAction}>
            <button>{isFavourite ? 'Remove' : 'Add'}</button>
        </form>
        <p className={state?.success ? 'success' : 'error'}>
            {isPending ? 'Saving...' : state.message}
        </p>
    </>);
}