const OFFERING_LABELS = {
  produce: { en: "Fresh produce", es: "Frutas y verduras" },
  protein: { en: "Protein", es: "Proteína" },
  dairy: { en: "Dairy", es: "Lácteos" },
  grains: { en: "Grains", es: "Granos" },
  canned: { en: "Canned foods", es: "Enlatados" },
  baby: { en: "Baby items", es: "Artículos para bebé" },
  diapers: { en: "Diapers", es: "Pañales" },
  hygiene: { en: "Hygiene", es: "Higiene" },
  hot_meal: { en: "Hot meals", es: "Comida caliente" }
};

const DEFAULT_ZIP_CENTROIDS = {
  "78501": { lat: 26.207, lng: -98.23 },
  "78503": { lat: 26.175, lng: -98.248 },
  "78504": { lat: 26.265, lng: -98.248 },
  "78539": { lat: 26.294, lng: -98.159 },
  "78541": { lat: 26.305, lng: -98.163 },
  "78572": { lat: 26.217, lng: -98.325 },
  "78573": { lat: 26.191, lng: -98.317 },
  "78577": { lat: 26.194, lng: -98.183 },
  "78596": { lat: 26.159, lng: -97.988 },
  "78599": { lat: 26.158, lng: -97.99 },
  "78550": { lat: 26.191, lng: -97.696 },
  "78552": { lat: 26.19, lng: -97.725 },
  "78520": { lat: 25.901, lng: -97.497 },
  "78521": { lat: 25.926, lng: -97.418 },
  "78526": { lat: 25.965, lng: -97.552 }
};

const PANTRIES = [
  {
    id: "food-bank-rgv",
    name: "Food Bank RGV (Main Warehouse)",
    address1: "724 N Cage Blvd",
    city: "Pharr",
    state: "TX",
    zip: "78577",
    lat: 26.1959,
    lng: -98.1862,
    phone: "(956) 682-8101",
    website: "https://foodbankrgv.com/",
    hoursText: "Mon–Fri: 8am–5pm",
    eligibilityText:
      "Varies by program. Call or check the website for distribution sites and requirements.",
    offerings: ["canned", "grains", "produce", "protein", "hygiene", "baby", "diapers"],
    notes: "Use as a reference hub; many pantries distribute via partner sites.",
    lastVerified: "2026-04-18"
  },
  {
    id: "template-fill-me",
    name: "(Add pantry) — Fill me",
    address1: "",
    city: "McAllen",
    state: "TX",
    zip: "78501",
    lat: null,
    lng: null,
    phone: "",
    website: "",
    hoursText: "",
    eligibilityText: "",
    offerings: ["canned", "grains"],
    notes: "",
    lastVerified: "2026-04-18"
  }
];

const RECIPES = [
  {
    id: "bean-rice-bowl",
    title: "Beans + Rice Bowl",
    required: ["beans", "rice"],
    optional: ["onion", "garlic", "tomato", "frozen_veg", "cheese", "hot_sauce"],
    timeMins: 20,
    steps: [
      "Cook rice (or heat ready rice).",
      "Warm beans with any spices or onions/garlic if available.",
      "Combine in a bowl; add any optional toppings."
    ]
  },
  {
    id: "tuna-crackers",
    title: "Tuna Salad + Crackers",
    required: ["canned_tuna"],
    optional: ["mayo", "mustard", "pickle", "onion", "crackers", "bread"],
    timeMins: 10,
    steps: [
      "Drain tuna.",
      "Mix with mayo (or a little oil) and any extras.",
      "Serve with crackers or on bread."
    ]
  },
  {
    id: "lentil-soup",
    title: "Simple Lentil Soup",
    required: ["lentils", "broth_or_water"],
    optional: ["onion", "garlic", "carrot", "celery", "canned_tomato", "spices"],
    timeMins: 35,
    steps: [
      "Rinse lentils.",
      "Simmer lentils in broth/water until tender.",
      "Add any optional veggies/spices and simmer 10 more minutes."
    ]
  },
  {
    id: "oatmeal-fruit",
    title: "Oatmeal with Fruit",
    required: ["oats", "water_or_milk"],
    optional: ["banana", "apple", "cinnamon", "peanut_butter", "honey"],
    timeMins: 8,
    steps: ["Cook oats with water or milk.", "Top with fruit and any optional add-ins."]
  }
];

const INGREDIENTS = [
  { key: "beans", label: { en: "Beans", es: "Frijoles" } },
  { key: "rice", label: { en: "Rice", es: "Arroz" } },
  { key: "tortillas", label: { en: "Tortillas", es: "Tortillas" } },
  { key: "bread", label: { en: "Bread", es: "Pan" } },
  { key: "eggs", label: { en: "Eggs", es: "Huevos" } },
  { key: "cheese", label: { en: "Cheese", es: "Queso" } },
  { key: "oats", label: { en: "Oats", es: "Avena" } },
  { key: "pasta", label: { en: "Pasta", es: "Pasta" } },
  { key: "ramen", label: { en: "Ramen", es: "Ramen" } },
  { key: "lentils", label: { en: "Lentils", es: "Lentejas" } },
  { key: "canned_tuna", label: { en: "Canned tuna", es: "Atún enlatado" } },
  { key: "canned_chicken", label: { en: "Canned chicken", es: "Pollo enlatado" } },
  { key: "canned_chickpeas", label: { en: "Chickpeas", es: "Garbanzos" } },
  { key: "canned_corn", label: { en: "Canned corn", es: "Elote enlatado" } },
  { key: "canned_tomato_sauce", label: { en: "Tomato sauce", es: "Salsa de tomate" } },
  { key: "salsa", label: { en: "Salsa", es: "Salsa" } },
  { key: "cereal", label: { en: "Cereal", es: "Cereal" } },
  { key: "milk", label: { en: "Milk", es: "Leche" } },
  { key: "yogurt", label: { en: "Yogurt", es: "Yogur" } },
  { key: "peanut_butter", label: { en: "Peanut butter", es: "Mantequilla de cacahuate" } },
  { key: "frozen_veg", label: { en: "Frozen vegetables", es: "Verduras congeladas" } },
  { key: "onion", label: { en: "Onion", es: "Cebolla" } },
  { key: "garlic", label: { en: "Garlic", es: "Ajo" } },
  { key: "banana", label: { en: "Banana", es: "Plátano" } },
  { key: "apple", label: { en: "Apple", es: "Manzana" } },
  { key: "broth_or_water", label: { en: "Broth or water", es: "Caldo o agua" } }
];

function haversineMiles(a, b) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return R * c;
}

function formatOffering(tag, lang) {
  return OFFERING_LABELS[tag]?.[lang] ?? tag;
}

function getHashRoute() {
  const raw = window.location.hash.replace(/^#/, "");
  const [pathPart, queryPart] = raw.split("?");
  const path = pathPart || "/";
  const query = new URLSearchParams(queryPart || "");
  return { path, query };
}

function navigate(to) {
  window.location.hash = to.startsWith("#") ? to : `#${to}`;
}

function useHashRoute() {
  const [route, setRoute] = React.useState(getHashRoute());
  React.useEffect(() => {
    const onChange = () => setRoute(getHashRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

function filterPantries({ zip, selectedOfferings }) {
  const zipCentroid = DEFAULT_ZIP_CENTROIDS[zip];
  const hasZip = Boolean(zipCentroid);

  const list = PANTRIES.filter((p) => {
    if (!p.zip) return false;
    for (const off of selectedOfferings) {
      if (!p.offerings?.includes(off)) return false;
    }
    return true;
  }).map((p) => {
    let distance = null;
    if (hasZip && p.lat != null && p.lng != null) {
      distance = haversineMiles(zipCentroid, { lat: p.lat, lng: p.lng });
    }
    return { ...p, distance };
  });

  list.sort((a, b) => {
    if (a.distance == null && b.distance == null) return a.name.localeCompare(b.name);
    if (a.distance == null) return 1;
    if (b.distance == null) return -1;
    return a.distance - b.distance;
  });

  return { list, zipCentroidFound: hasZip };
}

function matchRecipes(selected) {
  const selectedSet = new Set(selected);
  const matches = [];
  for (const r of RECIPES) {
    const ok = r.required.every((k) => selectedSet.has(k));
    if (!ok) continue;
    const optionalHits = (r.optional || []).filter((k) => selectedSet.has(k)).length;
    matches.push({ recipe: r, optionalHits });
  }
  matches.sort((a, b) => b.optionalHits - a.optionalHits);
  return matches.slice(0, 5);
}

function Toggle({ pressed, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={pressed ? "btnPrimary" : ""}
    >
      {children}
    </button>
  );
}

function App() {
  const { path, query } = useHashRoute();
  const [lang, setLang] = React.useState("en");
  const [theme, setTheme] = React.useState("dark");
  const [contrast, setContrast] = React.useState("normal");
  const [bigText, setBigText] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");
    document.documentElement.setAttribute(
      "data-contrast",
      contrast === "high" ? "high" : "normal"
    );
    document.documentElement.style.fontSize = bigText ? "18px" : "16px";
  }, [theme, contrast, bigText]);

  const header = (
    <header>
      <div className="brand">
        <h1>{lang === "es" ? "Buscador de Despensas RGV" : "RGV Pantry Finder"}</h1>
        <p>{lang === "es" ? "Encuentra despensas y qué cocinar" : "Find pantries and what to cook"}</p>
      </div>
      <div className="toolbar">
        <span className="pill" aria-label="language">
          {lang === "es" ? "Idioma" : "Language"}:&nbsp;
          <button type="button" onClick={() => setLang((l) => (l === "en" ? "es" : "en"))}>
            {lang === "en" ? "English" : "Español"}
          </button>
        </span>
        <Toggle pressed={theme === "light"} onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
          {lang === "es" ? "Claro" : "Light"}
        </Toggle>
        <Toggle pressed={contrast === "high"} onClick={() => setContrast((c) => (c === "normal" ? "high" : "normal"))}>
          {lang === "es" ? "Alto contraste" : "High contrast"}
        </Toggle>
        <Toggle pressed={bigText} onClick={() => setBigText((v) => !v)}>
          {lang === "es" ? "Texto grande" : "Large text"}
        </Toggle>
      </div>
    </header>
  );

  let page = null;

  if (path === "/" || path === "") {
    page = <SearchPage lang={lang} />;
  } else if (path.startsWith("/pantry/")) {
    const id = path.replace("/pantry/", "");
    page = <PantryPage lang={lang} pantryId={id} />;
  } else if (path === "/cook") {
    page = <CookPage lang={lang} pantryId={query.get("pantry") || ""} />;
  } else {
    page = (
      <div className="panel">
        <p style={{ margin: 0 }}>{lang === "es" ? "Página no encontrada." : "Page not found."}</p>
        <div className="actions">
          <button className="btnPrimary" onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {header}
      {page}
      <div className="footer">
        {lang === "es"
          ? "Nota: Ofertas y horarios pueden cambiar. Llama antes de ir."
          : "Note: Offerings and hours can change. Call before you go."}
      </div>
    </div>
  );
}

function SearchPage({ lang }) {
  const [zip, setZip] = React.useState("78577");
  const [selectedOfferings, setSelectedOfferings] = React.useState([]);

  const { list, zipCentroidFound } = React.useMemo(
    () => filterPantries({ zip, selectedOfferings }),
    [zip, selectedOfferings]
  );

  const offeringKeys = Object.keys(OFFERING_LABELS);

  return (
    <div className="panel" role="main">
      <div className="row">
        <div className="col">
          <label htmlFor="zip">{lang === "es" ? "Código postal" : "ZIP code"}</label>
          <input
            id="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder={lang === "es" ? "Ej. 78577" : "e.g. 78577"}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))}
          />
          <p className="hint" style={{ marginTop: 8 }}>
            {zipCentroidFound
              ? lang === "es"
                ? "Ordenado por distancia aproximada."
                : "Sorted by approximate distance."
              : lang === "es"
                ? "ZIP no está en la lista demo; mostrando por nombre."
                : "ZIP not in demo list; sorting by name."}
          </p>
        </div>
        <div className="col">
          <label>{lang === "es" ? "Filtrar por lo que ofrecen" : "Filter by offerings"}</label>
          <div className="tags" role="group" aria-label="offerings filters">
            {offeringKeys.map((k) => {
              const on = selectedOfferings.includes(k);
              return (
                <button
                  key={k}
                  type="button"
                  className={on ? "tag tagOn" : "tag"}
                  onClick={() =>
                    setSelectedOfferings((prev) =>
                      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
                    )
                  }
                >
                  {formatOffering(k, lang)}
                </button>
              );
            })}
          </div>
          <div className="actions">
            <button className="btnDanger" type="button" onClick={() => setSelectedOfferings([])}>
              {lang === "es" ? "Limpiar filtros" : "Clear filters"}
            </button>
          </div>
        </div>
      </div>

      <div className="divider" />

      <p className="hint" style={{ margin: "0 0 10px" }}>
        {lang === "es" ? `Resultados (${list.length})` : `Results (${list.length})`}
      </p>

      <div className="grid" aria-live="polite">
        {list.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p className="meta">
              {p.address1 ? `${p.address1}, ` : ""}
              {p.city}, {p.state} {p.zip}
              {p.distance != null ? ` • ${p.distance.toFixed(1)} mi` : ""}
            </p>
            <div className="tags">
              {(p.offerings || []).slice(0, 6).map((t) => (
                <span key={t} className="tag">{formatOffering(t, lang)}</span>
              ))}
            </div>
            <div className="actions">
              <button className="btnPrimary" onClick={() => navigate(`/pantry/${p.id}`)}>
                {lang === "es" ? "Ver" : "View"}
              </button>
              <button onClick={() => navigate(`/cook?pantry=${encodeURIComponent(p.id)}`)}>
                {lang === "es" ? "Qué cocinar" : "What to cook"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="hint" style={{ marginTop: 12 }}>
          {lang === "es" ? "No hay resultados con esos filtros." : "No results with those filters."}
        </p>
      ) : null}
    </div>
  );
}

function PantryPage({ lang, pantryId }) {
  const pantry = PANTRIES.find((p) => p.id === pantryId);

  if (!pantry) {
    return (
      <div className="panel" role="main">
        <p style={{ margin: 0 }}>{lang === "es" ? "Despensa no encontrada." : "Pantry not found."}</p>
        <div className="actions">
          <button className="btnPrimary" onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    );
  }

  const addr = `${pantry.address1}, ${pantry.city}, ${pantry.state} ${pantry.zip}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
  const telUrl = pantry.phone ? `tel:${pantry.phone.replace(/[^0-9+]/g, "")}` : null;

  return (
    <div className="panel" role="main">
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <button onClick={() => navigate("/")}>{lang === "es" ? "← Buscar" : "← Search"}</button>
        <button className="btnPrimary" onClick={() => navigate(`/cook?pantry=${encodeURIComponent(pantry.id)}`)}>
          {lang === "es" ? "Qué cocinar" : "What to cook"}
        </button>
      </div>

      <h2 style={{ margin: "8px 0 6px" }}>{pantry.name}</h2>
      <p className="meta" style={{ marginTop: 0 }}>{addr}</p>

      <div className="twoCol">
        <div className="panel" style={{ padding: 12 }}>
          <p className="hint" style={{ margin: "0 0 6px" }}>{lang === "es" ? "Horarios" : "Hours"}</p>
          <p style={{ margin: 0 }}>{pantry.hoursText || (lang === "es" ? "(No disponible)" : "(Not provided)")}</p>

          <div className="divider" />

          <p className="hint" style={{ margin: "0 0 6px" }}>{lang === "es" ? "Elegibilidad" : "Eligibility"}</p>
          <p style={{ margin: 0 }}>{pantry.eligibilityText || (lang === "es" ? "(No disponible)" : "(Not provided)")}</p>

          {pantry.notes ? (
            <>
              <div className="divider" />
              <p className="hint" style={{ margin: "0 0 6px" }}>{lang === "es" ? "Notas" : "Notes"}</p>
              <p style={{ margin: 0 }}>{pantry.notes}</p>
            </>
          ) : null}
        </div>

        <div className="panel" style={{ padding: 12 }}>
          <p className="hint" style={{ margin: "0 0 8px" }}>{lang === "es" ? "Lo que ofrecen" : "What they offer"}</p>
          <div className="tags">
            {(pantry.offerings || []).map((t) => (
              <span key={t} className="tag tagOn">{formatOffering(t, lang)}</span>
            ))}
          </div>

          <div className="divider" />

          <div className="actions">
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              <button className="btnPrimary" type="button">{lang === "es" ? "Direcciones" : "Directions"}</button>
            </a>
            {telUrl ? (
              <a href={telUrl}><button type="button">{lang === "es" ? "Llamar" : "Call"}</button></a>
            ) : (
              <button type="button" disabled>{lang === "es" ? "Teléfono no disponible" : "No phone listed"}</button>
            )}
            {pantry.website ? (
              <a href={pantry.website} target="_blank" rel="noreferrer"><button type="button">{lang === "es" ? "Sitio" : "Website"}</button></a>
            ) : null}
          </div>

          <p className="hint" style={{ margin: "10px 0 0" }}>
            {lang === "es" ? `Verificado: ${pantry.lastVerified || ""}` : `Last verified: ${pantry.lastVerified || ""}`}
          </p>
        </div>
      </div>
    </div>
  );
}

function CookPage({ lang, pantryId }) {
  const pantry = PANTRIES.find((p) => p.id === pantryId);
  const [selected, setSelected] = React.useState(() => new Set(["broth_or_water"]));

  const pantryOfferings = pantry?.offerings || [];

  const pantrySuggestedIngredients = React.useMemo(() => {
    const keys = new Set();
    if (pantryOfferings.includes("grains")) keys.add("rice");
    if (pantryOfferings.includes("canned")) keys.add("beans");
    if (pantryOfferings.includes("protein")) keys.add("canned_chicken");
    if (pantryOfferings.includes("dairy")) keys.add("cheese");
    if (pantryOfferings.includes("produce")) keys.add("onion");
    return keys;
  }, [pantryOfferings]);

  React.useEffect(() => {
    setSelected((prev) => {
      const next = new Set(prev);
      for (const k of pantrySuggestedIngredients) next.add(k);
      return next;
    });
  }, [pantrySuggestedIngredients]);

  const selectedArr = Array.from(selected);
  const matches = React.useMemo(() => matchRecipes(selectedArr), [selectedArr]);

  function toggleIngredient(key) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="panel" role="main">
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <button onClick={() => (pantry ? navigate(`/pantry/${pantry.id}`) : navigate("/"))}>
          {lang === "es" ? "← Regresar" : "← Back"}
        </button>
        <button className="btnDanger" onClick={() => setSelected(new Set(["broth_or_water"]))}>
          {lang === "es" ? "Reiniciar" : "Reset"}
        </button>
      </div>

      <h2 style={{ margin: "8px 0 6px" }}>{lang === "es" ? "Qué puedo cocinar" : "What can I cook"}</h2>
      <p className="hint" style={{ marginTop: 0 }}>
        {pantry
          ? lang === "es" ? `Basado en: ${pantry.name}` : `Based on: ${pantry.name}`
          : lang === "es" ? "Selecciona ingredientes comunes." : "Select common ingredients."}
      </p>

      <div className="divider" />

      <div className="twoCol">
        <div>
          <p className="hint" style={{ margin: "0 0 10px" }}>
            {lang === "es" ? "Marca lo que tienes o puedes conseguir." : "Check what you have or can get."}
          </p>
          <div className="checklist">
            {INGREDIENTS.map((it) => {
              const on = selected.has(it.key);
              return (
                <label key={it.key} className="check">
                  <input type="checkbox" checked={on} onChange={() => toggleIngredient(it.key)} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{it.label[lang] || it.key}</div>
                    {pantrySuggestedIngredients.has(it.key) ? (
                      <div className="hint" style={{ marginTop: 2 }}>
                        {lang === "es" ? "Sugerido por esta despensa" : "Suggested by this pantry"}
                      </div>
                    ) : null}
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <p className="hint" style={{ margin: "0 0 10px" }}>{lang === "es" ? "Ideas (máx. 5)" : "Ideas (max 5)"}</p>
          {matches.length === 0 ? (
            <div className="card">
              <p style={{ margin: 0 }}>
                {lang === "es"
                  ? "No hay recetas que coincidan aún. Marca más ingredientes (por ejemplo, arroz o frijoles)."
                  : "No matches yet. Check more ingredients (like rice or beans)."}
              </p>
            </div>
          ) : (
            <div className="grid">
              {matches.map(({ recipe, optionalHits }) => (
                <div key={recipe.id} className="card">
                  <h3>{recipe.title}</h3>
                  <p className="meta">
                    {(lang === "es" ? "Tiempo" : "Time") + ": " + recipe.timeMins + " min"} • {"Extras: " + optionalHits}
                  </p>
                  <p className="hint" style={{ margin: "0 0 6px" }}>
                    {lang === "es" ? "Requiere" : "Requires"}: {recipe.required.join(", ")}
                  </p>
                  <ol style={{ margin: 0, paddingLeft: 18 }}>
                    {recipe.steps.map((s, i) => (
                      <li key={i} style={{ marginBottom: 6 }}>{s}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

if (!window.location.hash) {
  window.location.hash = "#/";
}
