import { css, styled } from '@stitches/react';

export const Container = styled('div', {
  width: '280px',
  height: '259px',
  fontSize: '14px',
});

export const ImageContainer = css({
  backgroundSize: 'cover',
  width: '280px',
  height: '196px',
  borderRadius: '16px',
});

export const InfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '63px',

  '& > div': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.5rem',

    'h2': {
      fontSize: '1rem',
    }
  },

  'button': {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'red'
  }
})
