/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Change file type to JS because VS Code Tailwind Intellisense extension
 * only works with JS tailwind configs.
 *
 * https://tailwindcss.nuxt.dev/tailwind/config#default-configuration
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    corePlugins: {
      // Disable preflight because the css imported by this
      // option has conflicts with PrimeVue's styles. Particularly,
      // the buttons and inputs. However, we are still interested
      // in some of the styles added by preflight so what we'll do
      // instead is import the preflight styles manually and remove
      // the conflicting styles.
      preflight: false,
    },
    theme: {
      lineHeight: {
        none: '1',
        tight: '1.2',
        normal: '1.5',
        auto: 'auto',
      },
      fontSize: ({ theme }) => ({
        body: ['14px'],
        small: ['10.5px'],
        h1: [
          '35px',
          {
            lineHeight: theme('lineHeight.normal'),
          },
        ],
        h2: [
          '28px',
          {
            lineHeight: theme('lineHeight.normal'),
          },
        ],
        h3: [
          '24.5px',
          {
            lineHeight: theme('lineHeight.normal'),
          },
        ],
        h4: [
          '21px',
          {
            lineHeight: theme('lineHeight.normal'),
          },
        ],
        h5: [
          '17.5px',
          {
            lineHeight: theme('lineHeight.normal'),
          },
        ],
        h6: [
          '14px',
          {
            lineHeight: theme('lineHeight.normal'),
          },
        ],
      }),
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
  
      colors: {
        blue: {
          50: 'var(--blue-50)',
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)',
          500: 'var(--blue-500)',
          600: 'var(--blue-600)',
          700: 'var(--blue-700)',
          800: 'var(--blue-800)',
          900: 'var(--blue-900)',
        },
        green: {
          50: 'var(--green-50)',
          100: 'var(--green-100)',
          200: 'var(--green-200)',
          300: 'var(--green-300)',
          400: 'var(--green-400)',
          500: 'var(--green-500)',
          600: 'var(--green-600)',
          700: 'var(--green-700)',
          800: 'var(--green-800)',
          900: 'var(--green-900)',
        },
        yellow: {
          50: 'var(--yellow-50)',
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          400: 'var(--yellow-400)',
          500: 'var(--yellow-500)',
          600: 'var(--yellow-600)',
          700: 'var(--yellow-700)',
          800: 'var(--yellow-800)',
          900: 'var(--yellow-900)',
        },
        cyan: {
          50: 'var(--cyan-50)',
          100: 'var(--cyan-100)',
          200: 'var(--cyan-200)',
          300: 'var(--cyan-300)',
          400: 'var(--cyan-400)',
          500: 'var(--cyan-500)',
          600: 'var(--cyan-600)',
          700: 'var(--cyan-700)',
          800: 'var(--cyan-800)',
          900: 'var(--cyan-900)',
        },
        pink: {
          50: 'var(--pink-50)',
          100: 'var(--pink-100)',
          200: 'var(--pink-200)',
          300: 'var(--pink-300)',
          400: 'var(--pink-400)',
          500: 'var(--pink-500)',
          600: 'var(--pink-600)',
          700: 'var(--pink-700)',
          800: 'var(--pink-800)',
          900: 'var(--pink-900)',
        },
        indigo: {
          50: 'var(--indigo-50)',
          100: 'var(--indigo-100)',
          200: 'var(--indigo-200)',
          300: 'var(--indigo-300)',
          400: 'var(--indigo-400)',
          500: 'var(--indigo-500)',
          600: 'var(--indigo-600)',
          700: 'var(--indigo-700)',
          800: 'var(--indigo-800)',
          900: 'var(--indigo-900)',
        },
        teal: {
          50: 'var(--teal-50)',
          100: 'var(--teal-100)',
          200: 'var(--teal-200)',
          300: 'var(--teal-300)',
          400: 'var(--teal-400)',
          500: 'var(--teal-500)',
          600: 'var(--teal-600)',
          700: 'var(--teal-700)',
          800: 'var(--teal-800)',
          900: 'var(--teal-900)',
        },
        orange: {
          50: 'var(--orange-50)',
          100: 'var(--orange-100)',
          200: 'var(--orange-200)',
          300: 'var(--orange-300)',
          400: 'var(--orange-400)',
          500: 'var(--orange-500)',
          600: 'var(--orange-600)',
          700: 'var(--orange-700)',
          800: 'var(--orange-800)',
          900: 'var(--orange-900)',
        },
        bluegray: {
          50: 'var(--bluegray-50)',
          100: 'var(--bluegray-100)',
          200: 'var(--bluegray-200)',
          300: 'var(--bluegray-300)',
          400: 'var(--bluegray-400)',
          500: 'var(--bluegray-500)',
          600: 'var(--bluegray-600)',
          700: 'var(--bluegray-700)',
          800: 'var(--bluegray-800)',
          900: 'var(--bluegray-900)',
        },
        purple: {
          50: 'var(--purple-50)',
          100: 'var(--purple-100)',
          200: 'var(--purple-200)',
          300: 'var(--purple-300)',
          400: 'var(--purple-400)',
          500: 'var(--purple-500)',
          600: 'var(--purple-600)',
          700: 'var(--purple-700)',
          800: 'var(--purple-800)',
          900: 'var(--purple-900)',
        },
        red: {
          50: 'var(--red-50)',
          100: 'var(--red-100)',
          200: 'var(--red-200)',
          300: 'var(--red-300)',
          400: 'var(--red-400)',
          500: 'var(--red-500)',
          600: 'var(--red-600)',
          700: 'var(--red-700)',
          800: 'var(--red-800)',
          900: 'var(--red-900)',
        },
        black: '#000',
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
  
        primary: 'var(--primary-color)',
        'on-primary': 'var(--primary-color-text)',
        'on-secondary': 'var(--text-color-secondary)',
        surface: {
          a: 'var(--surface-a)',
          b: 'var(--surface-b)',
          c: 'var(--surface-c)',
          d: 'var(--surface-d)',
          e: 'var(--surface-e)',
          f: 'var(--surface-f)',
          0: 'var(--surface-0)',
          50: 'var(--surface-50)',
          100: 'var(--surface-100)',
          200: 'var(--surface-200)',
          300: 'var(--surface-300)',
          400: 'var(--surface-400)',
          500: 'var(--surface-500)',
          600: 'var(--surface-600)',
          700: 'var(--surface-700)',
          800: 'var(--surface-800)',
          900: 'var(--surface-900)',
          ground: 'var(--surface-ground)',
          section: 'var(--surface-section)',
          card: 'var(--surface-card)',
          overlay: 'var(--surface-overlay)',
          border: 'var(--surface-border)',
          hover: 'var(--surface-hover)',
        },
        'on-surface': 'var(--text-color)',
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };
  