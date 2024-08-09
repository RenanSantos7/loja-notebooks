import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const StyledSearchBar = styled.div`
    border-radius: 4rem;
    background-color: var(--surface);
    display: flex;
    gap: 1rem;
    align-items: center;
    align-self: center;
    padding-inline: 1rem;
    height: 46px;
    width: min(35vw, 750px);

    .search {
        color: var(--cinza5);
    }

    input {
        background-color: transparent;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: var(--cinza5)
        }
    }
`

export default function SearchBar() {
    return (
        <StyledSearchBar>
            <FontAwesomeIcon
                icon={faSearch}
                className='search'
            />

            <input
                title='Busca'
                type='text'
                placeholder='Pesquisar...'
            />
        </StyledSearchBar>
    )
}
