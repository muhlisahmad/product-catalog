-- CreateTable
CREATE TABLE "laptops" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(75),
    "model" VARCHAR(75),
    "screen_size" VARCHAR(20),
    "color" VARCHAR(80),
    "harddisk" VARCHAR(10),
    "cpu" VARCHAR(50),
    "ram" VARCHAR(10),
    "OS" VARCHAR(75),
    "special_features" TEXT,
    "graphics" VARCHAR(50),
    "graphics_coprocessor" VARCHAR(50),
    "cpu_speed" VARCHAR(20),
    "rating" DECIMAL(2,1),
    "price" VARCHAR(20),

    CONSTRAINT "laptops_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "laptops_brand_idx" ON "laptops"("brand");

-- CreateIndex
CREATE INDEX "laptops_model_idx" ON "laptops"("model");
