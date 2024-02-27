St Button
import { styled } from '@mui/system';
import { LoadingButton } from '@mui/lab';

export const Wrapper = styled(LoadingButton)(
  ({ theme, profile, size = 'medium', rounded, style, icon }) => {
    return {
      // DEFAULT VARIANT

      boxShadow: 'none',
      borderRadius: '8px',
      padding: '6px 16px',
      fontSize: '12px',
      fontWeight: 525,
      lineHeight: '16px',

      '&:hover': {
        boxShadow: 'none',
      },

      textTransform: 'unset',

      //DISABLED STATE

      '&.Mui-disabled ': {
        opacity: 0.4,
      },

      transition: 'all 0.3s',

      //PROFILE:- PRIMARY

      ...(profile === 'primary' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.blue[500]}`,
          color: `${theme.palette.default.white}`,

          '&:hover': {
            backgroundColor: `${theme.palette.blue[550]}`,
          },

          '& svg > path': {
            fill: `${theme.palette.default.white}`,
          },
        },
        '&.MuiButton-outlined': {
          border: `1px solid ${theme.palette.blue[500]}`,
          color: `${theme.palette.blue[500]}`,

          '&:hover': {
            border: `1px solid ${theme.palette.blue[200]}`,
            backgroundColor: `${theme.palette.blue[200]}`,
            color: `${theme.palette.blue[500]}`,
          },
          '& svg > path': {
            fill: `${theme.palette.blue[500]}`,
          },
        },

        '&.MuiButton-text': {
          color: `${theme.palette.blue[500]}`,
          border: '1px solid transparent',

          '&:hover': {
            border: `1px solid ${theme.palette.blue[500]} !important`,
            backgroundColor: `transparent`,
          },

          '& svg > path': {
            fill: `${theme.palette.blue[500]}`,
          },
        },
      }),

      //PROFILE:- SECONDARY

      ...(profile === 'secondary' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.orange[500]}`,
          color: `${theme.palette.default.white}`,

          '&:hover': {
            backgroundColor: `${theme.palette.orange[600]}`,
          },

          '& svg > path': {
            fill: `${theme.palette.default.white}`,
          },
        },
        '&.MuiButton-outlined': {
          border: `1px solid ${theme.palette.orange[500]}`,
          color: `${theme.palette.orange[500]}`,

          '&:hover': {
            border: `1px solid ${theme.palette.orange[200]}`,
            backgroundColor: `${theme.palette.orange[200]}`,
            color: `${theme.palette.orange[500]}`,
          },
          '& svg > path': {
            fill: `${theme.palette.orange[500]}`,
          },
        },

        '&.MuiButton-text': {
          color: `${theme.palette.orange[500]}`,
          border: '1px solid transparent',

          '&:hover': {
            border: `1px solid ${theme.palette.orange[500]} !important`,
            backgroundColor: `transparent`,
          },

          '& svg > path': {
            fill: `${theme.palette.orange[500]}`,
          },
        },
      }),

      //PROFILE:- DARK

      ...(profile === 'dark' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.neutral[800]}`,
          color: `${theme.palette.default.white}`,

          '&:hover': {
            backgroundColor: `${theme.palette.neutral[900]}`,
          },
          '& svg > path': {
            fill: `${theme.palette.default.white}`,
          },
        },
        '&.MuiButton-outlined': {
          border: `1px solid ${theme.palette.neutral[800]}`,
          color: `${theme.palette.neutral[800]}`,

          '&:hover': {
            border: `1px solid ${theme.palette.neutral[100]}`,
            backgroundColor: `${theme.palette.neutral[100]}`,
            color: `${theme.palette.neutral[800]}`,
          },
          '& svg > path': {
            fill: `${theme.palette.neutral[800]}`,
          },
        },

        '&.MuiButton-text': {
          color: `${theme.palette.neutral[800]}`,
          border: '1px solid transparent',

          '&:hover': {
            border: `1px solid ${theme.palette.neutral[800]} !important`,
            backgroundColor: `transparent`,
          },
          '& svg > path': {
            fill: `${theme.palette.neutral[800]}`,
          },
        },
      }),

      //PROFILE:- DANGER

      ...(profile === 'danger' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.red[500]}`,
          color: `${theme.palette.default.white}`,

          '&:hover': {
            backgroundColor: `${theme.palette.red[600]}`,
          },
          '& svg > path': {
            fill: `${theme.palette.default.white}`,
          },
        },
        '&.MuiButton-outlined': {
          border: `1px solid ${theme.palette.red[500]}`,
          color: `${theme.palette.red[500]}`,

          '&:hover': {
            border: `1px solid ${theme.palette.red[100]}`,
            backgroundColor: `${theme.palette.red[100]}`,
            color: `${theme.palette.red[500]}`,
          },

          '& svg > path': {
            fill: `${theme.palette.red[500]}`,
          },
        },

        '&.MuiButton-text': {
          color: `${theme.palette.red[500]}`,
          border: '1px solid transparent',

          '&:hover': {
            border: `1px solid ${theme.palette.red[500]} !important`,
            backgroundColor: `transparent`,
          },
          '& svg > path': {
            fill: `${theme.palette.red[500]}`,
          },
        },
      }),

      //PROFILE:- PRIMARY-LIGHT

      ...(profile === 'primary-light' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.blue[200]}`,
          color: `${theme.palette.blue[500]}`,

          '&:hover': {
            backgroundColor: `${theme.palette.blue[500]}`,
            color: `${theme.palette.default.white}`,

            '& svg > path': {
              fill: `${theme.palette.default.white}`,
              transition: '0.3s',
            },
          },
          '& svg > path': {
            fill: `${theme.palette.blue[500]}`,
          },
        },
      }),

      //PROFILE:- SECONDARY-LIGHT

      ...(profile === 'secondary-light' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.orange[200]}`,
          color: `${theme.palette.orange[500]}`,

          '&:hover': {
            backgroundColor: `${theme.palette.orange[500]}`,
            color: `${theme.palette.default.white}`,
            '& svg > path': {
              fill: `${theme.palette.default.white}`,
              transition: '0.3s',
            },
          },

          '& svg > path': {
            fill: `${theme.palette.orange[500]}`,
          },
        },
      }),

      //PROFILE:- DARK-LIGHT

      ...(profile === 'dark-light' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.neutral[100]}`,
          color: `${theme.palette.neutral[800]}`,

          '&:hover': {
            backgroundColor: `${theme.palette.neutral[800]}`,
            color: `${theme.palette.default.white}`,
            '& svg > path': {
              fill: `${theme.palette.default.white}`,
              transition: '0.3s',
            },
          },

          '& svg > path': {
            fill: `${theme.palette.neutral[800]}`,
          },
        },
      }),

      //PROFILE:- DANGER-LIGHT

      ...(profile === 'danger-light' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.red[100]}`,
          color: `${theme.palette.red[500]}`,

          '&:hover': {
            backgroundColor: `${theme.palette.red[500]}`,
            color: `${theme.palette.default.white}`,

            '& svg > path': {
              fill: `${theme.palette.default.white}`,
              transition: '0.3s',
            },
          },

          '& svg > path': {
            fill: `${theme.palette.red[500]}`,
          },
        },
      }),

      //CUSTOM PROFILES

      //DOMESTIC BUTTON
      ...(profile === 'domestic' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.blue[500]}`,
          color: `${theme.palette.default.white}`,
          padding: '12px 30px ',
          fontSize: '15px',
          fontWeight: 525,
          lineHeight: '20px',
          width: '100%',
          maxWidth: '140px',

          '@media(max-width:575px)': {
            maxHeight: '40px',
            fontSize: '14px',
            lineHeight: '20px',
          },

          '&:hover': {
            backgroundColor: `${theme.palette.blue[550]}`,
          },

          '& svg > path': {
            fill: `${theme.palette.default.white}`,
          },
        },
      }),

      //INTERNATIONAL BUTTON
      ...(profile === 'international' && {
        '&.MuiButton-contained': {
          backgroundColor: `${theme.palette.neutral[75]}`,
          color: `${theme.palette.neutral[700]}`,
          padding: '12px 30px',
          fontSize: '15px',
          fontWeight: 525,
          lineHeight: '20px',
          width: '100%',
          maxWidth: '140px',

          '@media(max-width:575px)': {
            maxHeight: '40px',
            fontSize: '14px',
            lineHeight: '20px',
          },

          '&:hover': {
            backgroundColor: `${theme.palette.neutral[100]}`,
          },

          '& svg > path': {
            fill: `${theme.palette.default.white}`,
          },
        },
      }),

      //SHAPE OF BUTTON

      ...(rounded && {
        borderRadius: '32px',
      }),

      //SIZE FOR ALL VARIANTS

      ...(size === 'xLarge' && {
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 525,
        lineHeight: '20px',

        ...(!icon && {
          gap: '8px',
        }),
      }),

      ...(size === 'large' && {
        padding: '8px 20px',
        fontSize: '14px',
        fontWeight: 525,
        lineHeight: '20px',
        ...(!icon && {
          gap: '8px',
        }),
      }),

      ...(size === 'medium' && {
        padding: '6px 16px',
        fontSize: '14px',
        fontWeight: 475,
        lineHeight: '18px',
        ...(!icon && {
          gap: '4px',
        }),

        svg: {
          width: '20px',
          height: '20px',
        },
        borderRadius: '4px',
      }),

      ...(size === 'small' && {
        padding: '4px 12px',
        fontSize: '12px',
        fontWeight: 475,
        lineHeight: '16px',
        ...(!icon && {
          gap: '4px',
        }),

        svg: {
          width: '20px',
          height: '20px',
        },
        borderRadius: '4px',
      }),

      ...(size === 'xSmall' && {
        padding: '4px 8px',
        fontSize: '12px',
        fontWeight: 475,
        lineHeight: '16px',
        ...(!icon && {
          gap: '4px',
        }),

        svg: {
          width: '16px',
          height: '16px',
        },
        borderRadius: '4px',
      }),

      //END-ICON

      '& .MuiButton-endIcon': {
        marginLeft: '0px',
      },

      // //START-ICON

      '& .MuiButton-startIcon': {
        marginRight: '0px',
      },

      ...(icon && {
        //END-ICON

        '& .MuiButton-endIcon': {
          marginLeft: '-4px',
        },

        // //START-ICON

        '& .MuiButton-startIcon': {
          marginRight: '-4px',
        },
      }),

      //OVERWRITE DEFAULT STYLES

      ...style,
    };
  },
);

export const TextWrapper = styled('span')(({ theme }) => ({
  paddingTop: '1px',
  paddingBottom: '3px',
}));
`
