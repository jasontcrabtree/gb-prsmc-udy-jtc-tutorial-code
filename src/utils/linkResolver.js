const linkResolver = doc => {
  // Route for pages posts
  if (doc.type === "page") {
    return `/${doc.uid}`
  }

  // Homepage route fallback
  return "/"
}

export default linkResolver
