import React from 'react'
import { Pagination, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { bg, colors, textColor } from '../Theming/Theme'

const CustomPagination = styled(Pagination)`
    li a {
        background: ${bg} !important;
        color: ${textColor} !important;
        &:hover {
            text-decoration: underline;
        }
    }

    li.active span.page-link {
        background: ${colors.accent};
        border-color: ${colors.accent};
    }
`

const CustomEllipsis = styled(Pagination.Ellipsis)`
    span {
        background: ${bg} !important;
        color: ${textColor} !important;
    }
`

const PaginationComponent = ({ page, setPage, total }) => {
    const items = []

    // захардкодил 16 так как не даем выбора пользователям сколько отображать фильмов (в рамках тестового задания)
    const lastPage = Math.ceil(total / 16)

    let rightRadius = 5
    let leftRadius = 5
    // определяем стартовый рендж пагинации. пока пользователь не перейдет к 5 или более странице, не будем показывать следующие страницы
    if (page < 5) {
        leftRadius = page
        rightRadius = 10 - page
    }

    for (
        let number = 1;
        number <= lastPage; // тут цикл определяет сколько будет страниц в пагинации
        number += 1
    ) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => setPage(number)}
            >
                {number}
            </Pagination.Item>
        )
    }

    return (
        <Row>
            <CustomPagination
                className="justify-content-center w-100"
                size="lg"
            >
                {page !== 1 && (
                    <Pagination.Prev onClick={() => setPage(page - 1)} />
                )}

                {page > 5 && (
                    <>
                        <Pagination.First onClick={() => setPage(1)}>
                            1
                        </Pagination.First>
                        <CustomEllipsis disabled />
                    </>
                )}

                {items.slice(page - leftRadius, page + rightRadius)}

                {lastPage - page > 5 && (
                    <>
                        <CustomEllipsis disabled />

                        <Pagination.Last onClick={() => setPage(lastPage)}>
                            {lastPage}
                        </Pagination.Last>
                    </>
                )}
                {page !== lastPage && (
                    <Pagination.Next onClick={() => setPage(page + 1)} />
                )}
            </CustomPagination>
        </Row>
    )
}

export default PaginationComponent
