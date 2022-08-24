
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSort} from '../../store/data-process/data-process';
import {SortType} from '../../consts';
import {getSortType} from '../../store/data-process/selectors';


function SortingOffers(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(getSortType);
  const sortTypeValues = Object.values(SortType);
  const [show, setShow] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setShow(!show)}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${show && 'places__options--opened'}`}>
        {sortTypeValues.map((sortValue) => (
          <li key={sortValue} className={`places__option ${currentSort === sortValue && 'places__option--active'}`} tabIndex={0} onClick={() => {
            dispatch(changeSort(sortValue));
            setShow(!show);
          }}
          >{sortValue}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOffers;

