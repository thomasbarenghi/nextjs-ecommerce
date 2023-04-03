import Head from "next/head";
import { productos, categories } from "@/pages/api/data";
import { useRouter } from "next/router";
import {
  AdminLayout,
  AdminIsland,
  AdminIslandTitle,
  Input,
  TextArea,
  AdminTopBar,
  AdminPrimaryButton,
  AdminColumn,
  AdminGrid,
  AdminForm,
  Select,
  AdminRow,
  Checkbox,
} from "@/componentes";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateProduct } from "@/redux/slices/adminSlice";

export default function Productos() {
  const dispatch = useDispatch();
  const Router = useRouter();

  const [form, setForm] = useState({
    name: "",
    ribbon: "",
    description: "",
    price: "",
    categories: [],
    inStock: true,
    sku: "",
    slug: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (e) => {
    if (selectedCategories.includes(e.target.value)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== e.target.value)
      );
    } else {
      setSelectedCategories([...selectedCategories, e.target.value]);
    }
  };

  useEffect(() => {
    setForm({
      ...form,
      categories: selectedCategories,
    });
  }, [selectedCategories]);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Guardar producto", form);
    dispatch(fetchCreateProduct(form));
    Router.push("/admin/productos");
  };

  const disponibilidad = [
    { label: "Disponible", value: true },
    { label: "No disponible", value: false },
  ];

  return (
    <>
      <Head>
        <title>Crear producto</title>
      </Head>
      <AdminLayout>
        <AdminTopBar
          title={"Crear producto"}
          subtitle={"Completa el formulario"}
        >
          <AdminPrimaryButton onClick={handleSave} label="Guardar" />
        </AdminTopBar>
        <AdminGrid
          className="gap-6"
          style={{ gridTemplateColumns: "60% auto" }}
        >
          <AdminColumn className="gap-6">
            <AdminIsland>
              <AdminIslandTitle title="Información general" />
              <AdminForm>
                <AdminRow className="flex flex-row gap-4">
                  <Input
                    label="Nombre"
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                  />
                  <Input
                    label="Cinta"
                    name="ribbon"
                    onChange={handleInputChange}
                    type="text"
                  />
                </AdminRow>
                <TextArea
                  label="Descripcion"
                  name="description"
                  onChange={handleInputChange}
                />
              </AdminForm>
            </AdminIsland>
            <AdminIsland>
              <AdminIslandTitle title="Precios" />
              <AdminForm className="flex flex-col gap-4 px-4 py-4">
                <Input
                  label="Precio"
                  name="price"
                  type="number"
                  onChange={handleInputChange}
                />
              </AdminForm>
            </AdminIsland>
            <AdminIsland>
              <AdminIslandTitle title="Inventario y envíos" />
              <AdminForm className="flex flex-col gap-4 px-4 py-4">
                <div className="flex flex-row gap-4">
                  <Select
                    options={disponibilidad}
                    name="Estado"
                    onChange={handleInputChange}
                  />
                  <Input
                    label="SKU"
                    name="sku"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              </AdminForm>
            </AdminIsland>
          </AdminColumn>
          <AdminColumn className="gap-6">
            <AdminIsland>
              <AdminIslandTitle title="Categorias" />
              <div id="checkboxes" className="px-4 py-4">
                {categories.map((category) => {
                  return (
                    <div key={category.id} className="flex flex-row gap-2">
                      <Checkbox
                        name={category.nombre}
                        label={category.nombre}
                        value={category.id}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  );
                })}
              </div>
            </AdminIsland>
            <AdminIsland>
              <AdminIslandTitle title="Varios" />
              <AdminForm>
                <Input
                  label="Slug"
                  name="slug"
                  type="text"
                  onChange={handleInputChange}
                />
              </AdminForm>
            </AdminIsland>
          </AdminColumn>
        </AdminGrid>
      </AdminLayout>
    </>
  );
}
