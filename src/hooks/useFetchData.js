import { useEffect, useState } from 'react'

/**
 * Hook personnalisé pour récupérer des données à partir d'une URL donnée ou utiliser des données JSON locales.
 *
 * @param {string | Object} urlOrData - L'URL pour récupérer les données, ou les données JSON locales à utiliser.
 * @returns {Object} Les données récupérées, l'état de chargement et l'état d'erreur.
 * @property {Object} data - Les données récupérées.
 * @property {boolean} loading - L'état de chargement.
 * @property {Object} error - L'état d'erreur.
 */
export function useFetchData(urlOrData) {
    const [state, setState] = useState({
        isLoading: true,
        data: [],
        error: null,
    })

    useEffect(() => {
        if (typeof urlOrData === 'string') {
            const fetchData = async () => {
                try {
                    const response = await fetch(urlOrData)
                    const data = await response.json()
                    setState({ isLoading: false, data, error: null })
                } catch (error) {
                    setState({ isLoading: false, data: null, error: error })
                }
            }
            fetchData()
        } else {
            setState({ isLoading: false, data: urlOrData })
        }
    }, [urlOrData])

    return state
}
