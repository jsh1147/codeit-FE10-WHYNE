import * as S from './MyWines.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getWines, GetWines, Wine } from '@/apis/myProfileApi';

interface MyWineProps {
    openDeleteModal: (wineId:number) => void;
    openEditWineModal: (wineId:number) => void;
}


export default function MyWines({ openDeleteModal, openEditWineModal } : MyWineProps) {
    const [wines, setWines] = useState<GetWines['list']>([]);
    const [cursor, setCursor] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null); 
    
    const handleDeleteClick = (wineId:number) => {
        openDeleteModal(wineId);
    };
    const handleEditClick = (wineId:number) => {
        openEditWineModal(wineId);
    }
    
    const toggleDropdown = (id: number) => {
        setActiveDropdown(prev => (prev === id ? null : id));
    };
    const fetchWines = useCallback(async () => {
        if (totalCount !== null && wines.length >= totalCount) return;

        try {
            const response = await getWines(5, cursor);
            if (response) {
                
                setWines(prev => [
                    ...prev,
                    ...response.list.filter(newItem => !prev.some(item => item.id === newItem.id)),
                ]);
                setCursor(response.nextCursor);
                setTotalCount(response.totalCount);
            }
        } catch (error) {
            console.error('와인 불러오기 오류:', error);
        }
    }, [cursor, wines.length, totalCount]);

    const setupObserver = useCallback(
        (node: HTMLDivElement) => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        fetchWines();
                    }
                },
            );
            if (node) {
                observerRef.current.observe(node);
            }
        },
        [fetchWines]
    );

    useEffect(() => {
        fetchWines();
    },[fetchWines]); 

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest('[data-dropdown]')) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    return (
        <S.WineListContainer>
            <S.TotalCount>총 {totalCount}개</S.TotalCount>
            {wines.map((wine: Wine) => (
            <S.WineItemWrapper key={wine.id}>
                <S.WineItem>
                    <S.ItemWrapper>
                        <S.WineImageWrapper>

                            <S.ImageWrapper>
                                <S.WineImage src={wine.image} alt="와인이미지" layout='fill' />
                            </S.ImageWrapper>
 
                        </S.WineImageWrapper>
                        
                    <S.WineInfoWrapper>
                        <S.WineNameWrapper>
                            <S.WineNameText>{wine.name}</S.WineNameText>
                            <S.WineRegionText>{wine.region}</S.WineRegionText>
                        </S.WineNameWrapper>
                        <S.Price>
                            <S.PriceText>{new Intl.NumberFormat('ko-KR', {
                                  style: 'currency',
                                  currency: 'KRW',
                                }).format(wine.price)}
                            </S.PriceText>
                        </S.Price>
                    </S.WineInfoWrapper>
                    </S.ItemWrapper>
                    <S.KebapIcon
                            aria-label="수정삭제 드롭다운 버튼"
                            data-dropdown
                            onClick={() => toggleDropdown(wine.id)}
                        />
                        {activeDropdown === wine.id && (
                            <S.DropdownList>
                            <ul>
                              <li>
                                <S.DropdownItem onClick={() => handleEditClick(wine.id)}>
                                  수정하기
                                </S.DropdownItem>
                              </li>
                              <li>
                                <S.DropdownItem onClick={() => handleDeleteClick(wine.id)} >
                                  삭제하기
                                </S.DropdownItem>
                              </li>
                            </ul>
                          </S.DropdownList>
                        )}
                </S.WineItem>
            </S.WineItemWrapper>
        ))}
        <div ref={setupObserver}></div>
        </S.WineListContainer>
    );
};